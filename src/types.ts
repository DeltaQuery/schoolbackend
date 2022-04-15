export enum Grado_alumno {
    Sala3 = "Sala de 3",
    Sala4 = "Sala de 4",
    Sala5 = "Sala de 5",
    Grado1er = "1er Grado",
    Grado2do = "2do Grado",
    Grado3er = "3er Grado",
    Grado4to = "4to Grado",
    Grado5to = "5to Grado",
    Grado6to = "6to Grado"
}
export enum Nivel_alumno {
    Basica = "Básica",
    Primaria = "Primaria"
}
export enum Tipo_id {
    V = "V",
    E = "E"
}

export interface Student {
    ID_ALUMNO?: number;
    NOMBRES_ALUMNO: string;
    APELLIDOS_ALUMNO: string;
    GRADO_ALUMNO: Grado_alumno;
    NIVEL_ALUMNO?: Nivel_alumno;
    TIPO_ALUMNO?: Tipo_id;
    CEDULA_ALUMNO?: string;
    SEXO_ALUMNO?: string;
    EDAD_ALUMNO?: number;
    BECA_ALUMNO?: number;
    DESC_ALUMNO?: number;
    INICIO_COBRO?: number;
    FINAL_COBRO?: number;
    ID_REPRESENTANTE?: number;
    CEDULA_REPRESENTANTE?: number;
    NOMBRES_REPRESENTANTE?: string;
    FECHA_REGISTRO?: string;
    REGISTRADO_POR?: string;
    ESTATUS?: string;
    FECHA_RETIRO?: number;
    TIPO_REPRESENTANTE?: Tipo_id;
    }