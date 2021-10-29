import * as Yup from 'yup';

export const BasicFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .matches(/^[a-zA-Zа-яА-я]+$/, "First name must contain only letters")
        .min(2, 'First name must be longer than 2 characters')
        .max(20, 'Too long first name')
        .required('Required field'),
    lastName: Yup.string()
        .matches(/^[a-zA-Zа-яА-я]+$/, "Last name must contain only letters")
        .min(2, 'Last name must be longer than 2 characters')
        .max(20, 'Too long last name')
        .required('Required field'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required field'),
    age: Yup.number()
        .typeError('Age must be a number')
        .integer('The age must be an integer')
        .min(18, 'Min age is 18')
        .max(110, 'Max age is 110')
        .required('Required field'),
    phone: Yup.number()
        .required('Required field'),
    address: Yup.string()
        .min(5, 'The address must be longer than 5 characters')
        .required('Required field')
});