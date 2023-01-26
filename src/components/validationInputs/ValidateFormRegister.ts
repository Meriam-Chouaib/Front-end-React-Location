import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, "Username length must be > 6")
        .max(50, "Username to large!")
        .required("Username is required"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password length must be > 6")
        .max(50, "Password to large!"),
    lastName: Yup.string()
        .min(2, "trop petit")
        .max(10, "trop long!")
        .required("Ce champ est obligatoire"),
    email: Yup.string()
        .email("Unvalid email")
        .required("Email is required!"),

    confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf(
            [Yup.ref("password"), null],
            "the confirm password is not equal to the password!"
        ),
    acceptTerms: Yup.bool().oneOf([true], "Accepter les conditions est obligatoire"),
});
