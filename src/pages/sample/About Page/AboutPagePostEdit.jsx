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
    image: [],
    title_uz: "",
    title_ru: "",
    title_en: "",
    sub_title_ru: "",
    sub_title_uz: "",
    sub_title_en: "",

};


const AboutPagePostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);





    // query-about-page
    const {
        mutate: postAboutPageMutate,
        data: postAboutPage,
        isLoading: postAboutPageLoading,
        isSuccess: postAboutPageSuccess,

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
        isLoading: editAboutPageLoading,
        data: editAboutPageData,
        refetch: editAboutPageRefetch,
        isSuccess: editAboutPageSuccess,

    } = useQuery(["edit-about-page", editId], () => apiService.getDataByID("/about/about", editId), {
        enabled: false
    });


    // put-query
    const {
        mutate: putAboutPage,
        isLoading: putAboutPageLoading,
        data: putData,
        isSuccess: putAboutPageSuccess
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



    //                                              =====useEffect====

    // about-page success
    useEffect(() => {
        if (putAboutPageSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postAboutPageSuccess || putAboutPageSuccess) {
            navigate('/about-page')
        }
    }, [postAboutPage, putData])

    // if edit about-page
    useEffect(() => {
        if (editId !== "") {
            editAboutPageRefetch();
        }
    }, [editId]);

    // if no edit about-page
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit about-page
    useEffect(() => {
            const image = [
                {
                    uid: editAboutPageData?.id,
                    name: editAboutPageData?.id,
                    status: "done",
                    url: editAboutPageData?.image
                }
            ]
        console.log(image)


        if (editAboutPageSuccess) {

            const edit = {
                title_uz: editAboutPageData?.title_uz,
                title_ru: editAboutPageData?.title_ru,
                title_en: editAboutPageData?.title_en,
                sub_title_ru: editAboutPageData?.sub_title_ru,
                sub_title_uz: editAboutPageData?.sub_title_uz,
                sub_title_en: editAboutPageData?.sub_title_en,
                image,
            }


            setFileListProps(image);
            form.setFieldsValue(edit)
        }

    }, [editAboutPageData])
    const onFinish = (values) => {

        const formData = new FormData()

        formData.append('title_uz', values.title_uz);
        formData.append('title_ru', values.title_ru);
        formData.append('title_en', values.title_en);
        formData.append('sub_title_ru', values.sub_title_ru);
        formData.append('sub_title_uz', values.sub_title_uz);
        formData.append('sub_title_en', values.sub_title_en);

        if (fileListProps[0]?.originFileObj) {
            formData.append('image', fileListProps[0]?.originFileObj);
        }

        if (editAboutPageSuccess) {

            putAboutPage({url: "/about/about", data:formData, id: editId});
        } else {
            postAboutPageMutate({url: "/about/about/", data:formData});
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


    const onChangeImage = ({fileList: newFileList}) => {

        setFileListProps(newFileList);
        form.setFieldsValue({image: newFileList});


    };


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
        {(postAboutPageLoading || editAboutPageLoading || putAboutPageLoading ) ? <AppLoader/> :
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
                            required_text={'Требуется дополнительный заголовок'}
                            label={'Подзаголовок Ru'}
                            name={'sub_title_ru'}
                        />

                    </Col>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'Qo\'shimcha sarlavha talab qilinadi'}
                            label={'Qo\'shimcha Sarlavha Uz'}
                            name={'sub_title_uz'}
                        />


                    </Col>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'An additional title is required'}
                            label={'Sub Title En'}
                            name={'sub_title_en'}
                        />

                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            label='Изображение'
                            name={'image'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListProps}
                                    listType='picture-card'
                                    onChange={onChangeImage}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                >
                                    {fileListProps.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                </Row>


                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editAboutPageSuccess ? 'Изменить' : 'Создать'}
                </Button>
            </Form>}
    </div>);
};

export default AboutPagePostEdit;