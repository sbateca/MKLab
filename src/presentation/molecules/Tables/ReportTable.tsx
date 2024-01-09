import { useEffect, useMemo, useState } from 'react';
import useReportRepository from '../../../hooks/reports/useReportRepository';
import { Toast } from '../Toast/Toast';
import { SampleReport } from '../../../Models/Report';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

export const ReportsTable = () => {
  
  const {getReports} = useReportRepository();
  const [reportsData, setReports] = useState<SampleReport[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = useMemo<MRT_ColumnDef<SampleReport>[]>(
    () => [
      {
        header: 'Cliente',
        accessorKey: 'clientName',
        accessorFn: (row) => {
          return row.sample ? row.sample.clientName : undefined;
        },
        enableHiding: false,
      },
      {
        accessorFn: (row) => {
          return row.sample ? row.sample.sampleCode : undefined;
        },
        accessorKey: 'id',
        header: 'Código de muestra',
        enableHiding: false,
      },
      {
        header: 'Fecha de recepción',
        accessorKey: 'receptionDate',
        accessorFn: (row) => {
          return row.sample ? row.sample.receptionDate : undefined;
        },
        enableHiding: false,
      },
      {
        header: 'Fecha de Análisis',
        accessorKey: 'analysisDate',
        accessorFn: (row) => {
          return row.sample ? row.sample.analysisDate : undefined;
        },
        enableHiding: false,
      },
      {
        header: 'Fecha de toma de muestra',
        accessorKey: 'getSampleDate',
        accessorFn: (row) => {
          return row.sample ? row.sample.getSampleDate : undefined;
        },
        enableHiding: false,
      },
    ],
    [],
  );

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setIsLoading(true);
        const data = await getReports();
        setReports(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        Toast.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al obtener los reportes',
        });
      }
    };
    fetchReports();
  }, []);

  return <MaterialReactTable columns={columns} data={reportsData} />;
};




