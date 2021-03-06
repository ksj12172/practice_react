import {Form, Input, Button} from 'antd';
import React, {useCallback} from 'react';
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput';

const CommentForm = ({post}) => {
    const [commentText, onChangeCommentText] = useInput('');

    const id = useSelector((state) => state.user.me?.id)
    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText)
    }, [commentText])

    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{position:'relative', margin:0}}>
                <Input.Textarea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button style={{
                    position:'absolute',
                    right:0, bottom:-40
                }}type="primary" htmlType="submit">삐약</Button>
            </Form.Item>
        </Form>
    )
}

CommentForm.propTypes = {
    post:PropTypes.object.isRequired
}
export default CommentForm;