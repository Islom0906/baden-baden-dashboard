import React, {useEffect, useState} from 'react';
import {Button, Col, Form, message, Row, Typography, Upload} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import ImgCrop from "antd-img-crop";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import FormInput from "../../../@crema/core/Form/FormInput";
import FormTextArea from "../../../@crema/core/Form/FormTextArea";
import FormInputNumber from "../../../@crema/core/Form/FormInputNumber";
import {MinusCircleOutlined} from "@ant-design/icons";


const {Title} = Typography

const initialValueForm = {
    title_uz: "",
    title_ru: "",
    title_en: "",
    sub_title_ru: "",
    sub_title_uz: "",
    sub_title_en: "",
    text_ru: "",
    text_uz: "",
    text_en: "",
    price: null,
    capacity: null,
    num_people: "",
    num_bedrooms: null,
    included_facilities: [
        {
            title_ru: "",
            title_uz: "",
            title_en: ""
        }
    ],
    image_ids:[],
    index_image: [],
};


const RoomsPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);
    const [fileListPropsIndex, setFileListPropsIndex] = useState([])
    const [isUpload, setIsUpload] = useState('');




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


    // query-rooms
    const {
        mutate: postRoomsMutate,
        data: postRooms,
        isLoading: postRoomsLoading,
        isSuccess: postRoomsSuccess,

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
        isLoading: editRoomsLoading,
        data: editRoomsData,
        refetch: editRoomsRefetch,
        isSuccess: editRoomsSuccess,

    } = useQuery(["edit-rooms", editId], () => apiService.getDataByID("/rooms", editId), {
        enabled: false
    });


    // put-query
    const {
        mutate: putRoomsPage,
        isLoading: putRoomsPageLoading,
        data: putData,
        isSuccess: putRoomsPageSuccess
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

    // rooms success
    useEffect(() => {
        if (putRoomsPageSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postRoomsSuccess || putRoomsPageSuccess) {
            navigate('/rooms')
        }
    }, [postRooms, putData])

    // if edit rooms
    useEffect(() => {
        if (editId !== "") {
            editRoomsRefetch();
        }
    }, [editId]);

    // if no edit rooms
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit rooms
    useEffect(() => {
        const image_ids = [];
        let index_image=[]
        if (editRoomsData !== undefined) {
            editRoomsData.images.map(image => {
                const data = {
                    uid: image.id,
                    name: image.id,
                    status: "done",
                    url: image.image
                }
                image_ids.push(data)
            })

            index_image=[
                {
                    uid: editRoomsData?.index_image?.id,
                    name: editRoomsData?.index_image?.id,
                    status: "done",
                    url: editRoomsData?.index_image?.image
                }
            ]




        }

        if (editRoomsSuccess) {

            const edit = {
                title_uz: editRoomsData?.title_uz,
                title_ru: editRoomsData?.title_ru,
                title_en: editRoomsData?.title_en,
                sub_title_ru: editRoomsData?.sub_title_ru,
                sub_title_uz: editRoomsData?.sub_title_uz,
                sub_title_en: editRoomsData?.sub_title_en,
                text_ru: editRoomsData?.text_ru,
                text_uz: editRoomsData?.text_uz,
                text_en: editRoomsData?.text_en,
                price: editRoomsData?.price,
                capacity: editRoomsData?.capacity,
                num_people: editRoomsData?.num_people,
                num_bedrooms: editRoomsData?.num_bedrooms,
                included_facilities: editRoomsData?.included_facilities,
                image_ids,
                index_image
            }


            setFileListProps(image_ids);
            setFileListPropsIndex(index_image)
            form.setFieldsValue(edit)
        }

    }, [editRoomsData])
    const onFinish = (values) => {
        const image_ids = []
        const index_image = []

        fileListProps.map(image => {
            image_ids.push(image.uid)
        })
        fileListPropsIndex.map(image => {
            index_image.push(image.uid)
        })

        const data = {
            image_ids,
            index_image:fileListPropsIndex[0]?.uid,
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            title_en: values.title_en,
            sub_title_uz: values.sub_title_uz,
            sub_title_ru: values.sub_title_ru,
            sub_title_en: values.sub_title_en,
            text_ru: values.text_ru,
            text_uz: values.text_uz,
            text_en: values.text_en,
            price: values.price,
            capacity: values.capacity,
            num_people: values.num_people,
            num_bedrooms: values.num_bedrooms,
            included_facilities: values.included_facilities,
        };
        if (editRoomsSuccess) {

            putRoomsPage({url: "/rooms", data, id: editId});
        } else {
            postRoomsMutate({url: "/rooms/", data});
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
        if (imagesUploadSuccess&&isUpload==='images') {
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
            setIsUpload("")
        }
         // main image
        if (imagesUploadSuccess&& isUpload==="indexImage") {
            const initialImage = [...fileListPropsIndex]
            const uploadImg = {
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }
            initialImage.push(uploadImg)
            form.setFieldsValue({index_image: [uploadImg]});
            setFileListPropsIndex(initialImage);
            setIsUpload("")
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
            setIsUpload("images")
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

    // index image
    const onChangeIndexImage = ({fileList: newFileList}) => {
        if (newFileList.length < fileListPropsIndex.length) {
            return
        }
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[newFileList.length - 1].originFileObj);
            imagesUploadMutate({url: "/about/images/", formData});
            setIsUpload("indexImage")
        }

    };

    const handleRemoveIndexImage = (file) => {

        const ids = {
            image_ids: [file?.uid]
        }
        imagesDeleteMutate({url: "/about/images/delete", ids});
        setFileListPropsIndex([])
        form.setFieldsValue({index_image: []});



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
        {(postRoomsLoading || editRoomsLoading || putRoomsPageLoading || imagesUploadLoading) ? <AppLoader/> :
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
                        <FormInput
                            required={true}
                            required_text={'Необходимо ввести подзаголовок'}
                            label={'Подзаголовок Ru'}
                            name={'sub_title_ru'}
                        />

                    </Col>
                    <Col span={24}>
                        <FormInput
                            required={true}
                            required_text={'Qo\'shimcha Sarlavha kiritish kerak'}
                            label={'Qo\'shimcha Sarlavha Uz'}
                            name={'sub_title_uz'}
                        />


                    </Col>
                    <Col span={24}>
                        <FormInput
                            required={true}
                            required_text={'A sub title is required'}
                            label={'Sub Title En'}
                            name={'sub_title_en'}
                        />

                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={12}>
                        <FormInputNumber
                            required={true}
                            required_text={'Необходимо цена  комнаты'}
                            label={'Цена комнаты'}
                            name={'price'}
                        />
                    </Col>
                    <Col span={12}>
                        <FormInputNumber
                            required={true}
                            required_text={'Человеческий потенциал необходим'}
                            label={'Человеческий потенциал'}
                            name={'capacity'}
                        />
                    </Col>
                    <Col span={12}>
                        <FormInputNumber
                            required={true}
                            required_text={'Необходимо указать количество люди.'}
                            label={'Количество люди'}
                            name={'num_people'}
                        />
                    </Col>
                    <Col span={12}>
                        <FormInputNumber
                            required={true}
                            required_text={'Необходимо ввести количество ванных комнат.'}
                            label={'Количество спальни комнат'}
                            name={'num_bedrooms'}
                        />
                    </Col>

                </Row>
                <Row gutter={20}>

                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'Требуется описание'}
                            label={'Описание Ru'}
                            name={'text_ru'}
                        />

                    </Col>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'Tavsif kiritish kerak'}
                            label={'Tavsif Uz'}
                            name={'text_uz'}
                        />


                    </Col>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'A description is required'}
                            label={'Description En'}
                            name={'text_en'}
                        />

                    </Col>
                </Row>
                <Title level={3}>Характеристики номера</Title>
                <Form.List name="included_facilities">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map((field, index) => {
                                return (
                                    <div key={field.fieldKey} style={{marginBottom: 20}}>
                                        <Row gutter={20}>

                                            <Col span={8}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'Должны быть включены функции'}
                                                    label={`Характеристики Ru ${index + 1}`}
                                                    name={[field.name, 'title_ru']}
                                                />
                                            </Col>
                                            <Col span={8}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'Xususiyatlari kiritish kerak'}
                                                    label={`Xususiyatlari Uz ${index + 1}`}
                                                    name={[field.name, 'title_uz']}
                                                />
                                            </Col>
                                            <Col span={8}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'Features must be included'}
                                                    label={`Characteristics En ${index + 1}`}
                                                    name={[field.name, 'title_en']}
                                                />
                                            </Col>


                                        </Row>
                                        <MinusCircleOutlined onClick={() => remove(field.name)}/>
                                    </div>

                                );
                            })}
                            <Form.Item>
                                <Button type="primary" onClick={() => add()} block
                                        style={{backgroundColor: '#28a745'}}>
                                    Открыть новый раздел для характеристика
                                </Button>
                            </Form.Item>

                        </>
                    )}
                </Form.List>

                <Row gutter={20}>

                    <Col span={12}>
                        <Form.Item
                            label='Изображение'
                            name={'image_ids'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={4}
                                    fileList={fileListProps}
                                    listType='picture-card'
                                    onChange={onChangeImage}
                                    onPreview={onPreview}
                                    onRemove={handleRemoveImage}
                                    beforeUpload={() => false}
                                >
                                    {fileListProps.length > 3 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label='Домашнее изображение'
                            name={'index_image'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListPropsIndex}
                                    listType='picture-card'
                                    onChange={onChangeIndexImage}
                                    onPreview={onPreview}
                                    onRemove={handleRemoveIndexImage}
                                    beforeUpload={() => false}
                                >
                                    {fileListPropsIndex.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>

                </Row>





                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editRoomsSuccess ? 'Изменить' : 'Создать'}
                </Button>
            </Form>}
    </div>);
};

export default RoomsPostEdit;