import axiosInstance from './axiosInstance';

const getNodeById = async (data) => {
    return await axiosInstance.post('/nodes/getNodeById', data);
};

export default {
    getNodeById
};
