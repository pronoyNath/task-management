import axios from "axios"

const axiosPublic = axios.create({
    baseURL: 'https://taskmanagementserver.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;