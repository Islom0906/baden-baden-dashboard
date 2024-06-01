import React, {useEffect, useState} from 'react';
import {Button, Col, Form, message, Row, Upload} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import ImgCrop from "antd-img-crop";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import FormInput from "../../../@crema/core/Form/FormInput";
import FormTextArea from "../../../@crema/core/Form/FormTextArea";



const initialValueForm = {
    image_ids: [],
    title_uz: "",
    title_ru: "",
    title_en: "",
    sub_title_uz: "",
    sub_title_ru: "",
    sub_title_en: "",

};


const GalleryPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);




    // query-image
    const {
        mutate: imagesUploadMutate,
        data: imagesUpload,
        isLoading: imagesUploadLoading,
        isSuccess: imagesUploadSuccess,
    } = useMutation(({url, formData}) => apiService.postData(url, formData), {

        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });


    // query-gallery
    const {
        mutate: postGalleryMutate,
        data: postGallery,
        isLoading: postGalleryLoading,
        isSuccess: postGallerySuccess,

    } = useMutation(({url, data}) => apiService.postData(url, data), {
        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });

    // query-edit
    const {
        isLoading: editGalleryLoading,
        data: editGalleryData,
        refetch: editGalleryRefetch,
        isSuccess: editGallerySuccess,

    } = useQuery(["edit-gallery", editId], () => apiService.getDataByID("/gallery", editId), {
        enabled: false
    });


    // put-query
    const {
        mutate: putGalleryPage,
        isLoading: putGalleryPageLoading,
        data: putData,
        isSuccess: putGalleryPageSuccess
    } = useMutation(({
                         url, data, id
                     }) => apiService.editData(url, data, id), {
        onSuccess: () => {
            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });

    // delete image

    const {mutate: imagesDeleteMutate} = useMutation(({url, ids}) => apiService.deleteImages(url, ids), {
        onSuccess: () => message.success('Success'),
        onError: (error) => message.error(error.message)
    });

    //                                              =====useEffect====

    // gallery success
    useEffect(() => {
        if (putGalleryPageSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postGallerySuccess || putGalleryPageSuccess) {
            navigate('/gallery')
        }
    }, [postGallery, putData])

    // if edit gallery
    useEffect(() => {
        if (editId !== "") {
            editGalleryRefetch();
        }
    }, [editId]);

    // if no edit gallery
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit gallery
    useEffect(() => {
        const image_ids = [];
        if (editGalleryData !== undefined) {
            editGalleryData.images.map(image => {
                const data = {
                    uid: image.id,
                    name: image.id,
                    status: "done",
                    url: image.image
                }
                image_ids.push(data)
            })



        }

        if (editGallerySuccess) {

            const edit = {
                title_uz: editGalleryData?.title_uz,
                title_ru: editGalleryData?.title_ru,
                title_en: editGalleryData?.title_en,
                sub_title_uz: editGalleryData?.sub_title_uz,
                sub_title_ru: editGalleryData?.sub_title_ru,
                sub_title_en: editGalleryData?.sub_title_en,
                image_ids,
            }


            setFileListProps(image_ids);
            form.setFieldsValue(edit)
        }

    }, [editGalleryData])
    const onFinish = (values) => {
        const image_ids = []

        fileListProps.map(image => {
            image_ids.push(image.uid)
        })

        const data = {
            image_ids,
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            title_en: values.title_en,
            sub_title_uz: values.sub_title_uz,
            sub_title_ru: values.sub_title_ru,
            sub_title_en: values.sub_title_en,
        };
        if (editGallerySuccess) {

            putGalleryPage({url: "/gallery", data, id: editId});
        } else {
            postGalleryMutate({url: "/gallery/", data});
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    // refresh page again get data

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('myFormValues'));
        if (storedValues) {
            storedValues.images = []
            form.setFieldsValue(storedValues);
        }

        const handleBeforeUnload = () => {

            localStorage.setItem('myFormValues', JSON.stringify(form.getFieldsValue()),);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            localStorage.removeItem('editDataId')
            localStorage.removeItem('myFormValues')
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, []);

    // image
    useEffect(() => {
        // images
        if (imagesUploadSuccess) {
            const initialImage = [...fileListProps]
            const uploadImg = {
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }
            initialImage.push(uploadImg)
            form.setFieldsValue({image_ids: [uploadImg]});
            setFileListProps(initialImage);
        }

    }, [imagesUpload]);

    const onChangeImage = ({fileList: newFileList}) => {
        if (newFileList.length < fileListProps.length) {
            return
        }
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[newFileList.length - 1].originFileObj);
            imagesUploadMutate({url: "/about/images/", formData});
        }

    };



    const handleRemoveImage = (file) => {
        const withoutDeleteImage = []

        fileListProps.map((image) => {
            if (image?.uid !== file?.uid) {
                withoutDeleteImage.push(image)
            }
        })
        if (!withoutDeleteImage.length > 0) {
            form.setFieldsValue({image_ids: []});
        }
        const ids = {
            image_ids: [file?.uid]
        }
        imagesDeleteMutate({url: "/about/images/delete", ids});
        setFileListProps(withoutDeleteImage)


    }



    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };








    return (<div>
        {(postGalleryLoading || editGalleryLoading || putGalleryPageLoading || imagesUploadLoading) ? <AppLoader/> :
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 24
                }}
                wrapperCol={{
                    span: 24
                }}
                style={{
                    maxWidth: "100%"
                }}
                initialValues={initialValueForm}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >


                <Row gutter={20}>

                    <Col span={24}>
                        <FormInput
                            required={true}
                            required_text={'Необходимо ввести заголовок'}
                            label={'Заголовок Ru'}
                            name={'title_ru'}
                        />

                    </Col>
                    <Col span={24}>
                        <FormInput
                            required={true}
                            required_text={'Sarlavha kiritish kerak'}
                            label={'Sarlavha Uz'}
                            name={'title_uz'}
                        />


                    </Col>
                    <Col span={24}>
                        <FormInput
                            required={true}
                            required_text={'A title is required'}
                            label={'Title En'}
                            name={'title_en'}
                        />

                    </Col>
                </Row>
                <Row gutter={20}>

                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'Необходимо ввести заголовок'}
                            label={'Подзаголовок Ru'}
                            name={'sub_title_ru'}
                        />

                    </Col>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'Sarlavha kiritish kerak'}
                            label={'Qo\'shimcha Sarlavha Uz'}
                            name={'sub_title_uz'}
                        />
                    </Col>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'A title is required'}
                            label={'Sub Title En'}
                            name={'sub_title_en'}
                        />
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={24}>
                        <Form.Item
                            label='Изображение'
                            name={'image_ids'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={30}
                                    fileList={fileListProps}
                                    listType='picture-card'
                                    onChange={onChangeImage}
                                    onPreview={onPreview}
                                    onRemove={handleRemoveImage}
                                    beforeUpload={() => false}
                                >
                                    {fileListProps.length > 29 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>

                </Row>





                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editGallerySuccess ? 'Изменить' : 'Создать'}
                </Button>
            </Form>}
    </div>);
};

export default GalleryPostEdit;