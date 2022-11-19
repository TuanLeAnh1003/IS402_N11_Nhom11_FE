import axiosInstance from './axiosInstance';

const getSurfaceByName = async (data) => {
    return await axiosInstance.post('/surfaces/getSurfaceByName', data);
};

const getSurfaceByName2 = async (data) => {
    return await axiosInstance.post('/surfaces/getSurfaceByName2', data);
}

export default {
    getSurfaceByName,
    getSurfaceByName2
};
