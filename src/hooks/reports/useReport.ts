import useReportRepository from './useReportRepository';

const useReport = () => {
    const getReports = useReportRepository;
    return {
        getReports
    }
};

export default useReport;