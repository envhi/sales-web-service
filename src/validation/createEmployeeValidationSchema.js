const yup = require('yup')

let registerEmployeeSchema = yup.object({
    name: yup.string().min(3).max(50).required("Name is required"),        //
    email: yup.string().email("Invalid e-mail").required("E-mail is required"),        // 
    password: yup.string().min(8, "Password should have at least 9 characters").required("Password is required"),  
    baseSalary: yup.number().required("Base salary is required"),      //
    birthDate: yup.date()                                               
        .required('Birth date is required')
        .min(new Date(1900, 0, 1), 'Invalid date')
        .max(new Date(), 'Invalid date'),
    phone: yup.string().min(8, "Phone invalid").required("Phone is required"),                                    
});


module.exports = registerEmployeeSchema;

