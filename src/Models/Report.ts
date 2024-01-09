interface Sample {
    id: string,
    sampleCode: string,
    clientName: string,
    sampleType: string,
    getSampleDate: string,
    receptionDate: string,
    analysisDate: string,
    responsable: string,
    sampleLocation: string
};

interface MicrobiologyCriteria {
    id: string;
    name: string;
};

interface MicrobiologyCriteriaResult {
    criteria: MicrobiologyCriteria;
    result: string;
};

interface Analyte {
    id: string;
    name: string;
    analysisMethod: string;
    results: string;
    microbiologyCriteriaResult: MicrobiologyCriteriaResult;
};

export interface SampleReport {
    id: string;
    sampleCode: string;
    clientName: string;
    sample: Sample,
    testMethods: string[],
    reportDate: string,
    analytes: Analyte[],
    generalObservations: string;
};