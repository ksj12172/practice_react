import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head'
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [
        {nickname:'제로초'},
        {nickname:'antd'},
        {nickname:'서울의 달'}
    ];
    const followingList = [
        {nickname:'제로초'},
        {nickname:'antd'},
        {nickname:'서울의 달'}
    ]
    return (
        <>
        <Head>
            <meta charset="utf-8"/>
            <title>NodeBird</title>
        </Head>
        <AppLayout>
            <NicknameEditForm/>
            <FollowList header="팔로잉 목록" data={followingList} />
            <FollowList header="팔로워 목록" data={followerList} />
        </AppLayout>
        </>
    )
};

export default Profile;