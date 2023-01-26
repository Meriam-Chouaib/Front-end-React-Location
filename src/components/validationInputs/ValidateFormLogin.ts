import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, "trop petit")
        .max(50, "trop long!")
        .required("Ce champ est obligatoire"),
    password: Yup.string()
        .required("Mot de passe est obligatoire")
        .min(6, "Mot de passe doit être plus grand que 6 caractères")
        .max(50, "Mot de passe doit être plus petit que 50 caractères"),
    acceptTerms: Yup.bool().oneOf([true], "Accepter les conditions est obligatoire"),
})