package com.valhalla.valhalla.models;

public enum ESexo {
    MASCULINO,
    FEMENINO;

    public static ESexo fromString(String sexoStr) {
        if (sexoStr != null) {
            for (ESexo s : ESexo.values()) {
                if (sexoStr.equalsIgnoreCase(s.name())) {
                    return s;
                }
            }
        }
        throw new IllegalArgumentException("No se pudo convertir " + sexoStr + " a un valor de Sexo");
    }

}
