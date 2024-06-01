import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, message, Row, Upload} from "antd";
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
    text_ru: "",
    text_uz: "",
    text_en: "",
    link: ""
};


const NewsPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);


    // query-news
    const {
        mutate: postNewsMutate,
        data: postNews,
        isLoading: postNewsLoading,
        isSuccess: postNewsSuccess,

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
        isLoading: editNewsLoading,
        data: editNewsData,
        refetch: editNewsRefetch,
        isSuccess: editNewsSuccess,

    } = useQuery(["edit-news", editId], () => apiService.getDataByID("/about/news", editId), {
        enabled: false
    });


    // put-query
    const {
        mutate: putNewsPage,
        isLoading: putNewsPageLoading,
        data: putData,
        isSuccess: putNewsPageSuccess
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

    // news success
    useEffect(() => {
        if (putNewsPageSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postNewsSuccess || putNewsPageSuccess) {
            navigate('/news')
        }
    }, [postNews, putData])

    // if edit news
    useEffect(() => {
        if (editId !== "") {
            editNewsRefetch();
        }
    }, [editId]);

    // if no edit news
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit news
    useEffect(() => {


        const image = [{
            uid: editNewsData?.id,
            name: editNewsData?.id,
            status: "done",
            url: editNewsData?.image
        }]


        if (editNewsSuccess) {

            const edit = {
                title_uz: editNewsData?.title_uz,
                title_ru: editNewsData?.title_ru,
                title_en: editNewsData?.title_en,
                text_ru: editNewsData?.text_ru,
                text_uz: editNewsData?.text_uz,
                text_en: editNewsData?.text_en,
                link: editNewsData.link.split('//')[1],
                image,
            }


            setFileListProps(image);
            form.setFieldsValue(edit)
        }

    }, [editNewsData])
    const onFinish = (values) => {
        const formData = new FormData();

        formData.append('title_ru', values.title_ru);
        formData.append('title_uz', values.title_uz);
        formData.append('title_en', values.title_en);
        formData.append('text_ru', values.text_ru);
        formData.append('text_uz', values.text_uz);
        formData.append('text_en', values.text_en);
        formData.append('link', `https://${values.link}`);


        if (fileListProps[0]?.originFileObj) {
            formData.append('image', fileListProps[0]?.originFileObj);
        }

        if (editNewsSuccess) {

            putNewsPage({url: "/about/news", data: formData, id: editId});
        } else {
            postNewsMutate({url: "/about/news/", data: formData});
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
        {(postNewsLoading || editNewsLoading || putNewsPageLoading) ? <AppLoader/> :
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

                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            label="News link"
                            name="link"
                            rules={[{required: true, message: 'Требуется link'}]}
                        >
                            <Input addonBefore={'https://'}/>
                        </Form.Item>

                    </Col>
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
                    {editNewsSuccess ? 'Изменить' : 'Создать'}
                </Button>
            </Form>}
    </div>);
};

export default NewsPostEdit;