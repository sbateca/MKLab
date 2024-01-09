import config from '../../util/config';
import useAxiosInstance from '../useAxiosInstance';
import { SampleReport } from '../../Models/Report';

const useReportRepository = () => {
    const baseURL: string = config.backendURL;
    const axiosInstance = useAxiosInstance({baseURL});

    const getReports = async () => {
        const {data} = await axiosInstance.get('/reports');
        return data as SampleReport[];
    };
    return {getReports};
};

export default useReportRepository;