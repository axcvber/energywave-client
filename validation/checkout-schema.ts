import * as yup from 'yup'

const phoneRegex = /^\+?3?8?([\s\.-]\(0\d{2}\)[\s\.-]\d{3}[\s\.-]\d{2}[\s\.-]\d{2})$/

const MyContactSchema = yup.object().shape({
  lastName: yup
    .string()
    .min(2, 'Введіть своє прізвище')
    .max(24, 'Прізвище повинно містити не більше 24 символів')
    .required('Введіть своє прізвище')
    .matches(/^[А-Яа-я\s]+$/, 'Введіть своє прізвище на кирилиці')
    .trim(),
  firstName: yup
    .string()
    .min(2, "Введіть своє ім'я")
    .max(24, "Ім'я повинно містити не більше 24 символів")
    .required("Введіть своє ім'я")
    .matches(/^[А-Яа-я\s]+$/, "Введіть своє ім'я на кирилиці")
    .trim(),
  email: yup.string().email('Введіть коректру пошту').max(30, 'Введіть коректру пошту'),
  phone: yup
    .string()
    .required('Введіть номер мобільного телефону')
    .matches(phoneRegex, 'Введіть коректний номер мобільного телефону'),
  recipient: yup.string().required(),
})

const RecipientContactSchema = MyContactSchema.shape({
  recipientLastName: yup
    .string()
    .min(2, 'Введіть прізвище')
    .max(24, 'Прізвище повинно містити не більше 24 символів')
    .required('Введіть прізвище')
    .matches(/^[А-Яа-я\s]+$/, 'Введіть прізвище на кирилиці')
    .trim(),
  recipientFirstName: yup
    .string()
    .min(2, "Введіть ім'я")
    .max(24, "Ім'я повинно містити не більше 24 символів")
    .required("Введіть ім'я")
    .matches(/^[А-Яа-я\s]+$/, "Введіть ім'я на кирилиці")
    .trim(),
  recipientMiddleName: yup
    .string()
    .notRequired()
    .min(2, 'Введіть по-батькові')
    .max(24, 'По-батькові повинно містити не більше 24 символів')
    .matches(/^[А-Яа-я\s]+$/, 'Введіть по-батькові на кирилиці')
    .nullable()
    .transform((value) => (!!value ? value : null))
    .trim(),
  recipientPhone: yup
    .string()
    .required('Введіть номер мобільного телефону')
    .matches(phoneRegex, 'Введіть коректний номер мобільного телефону'),
  recipient: yup.string().required(),
})

const ContactInfoSchema = yup.lazy(({ recipient }) => (recipient === 'Я' ? MyContactSchema : RecipientContactSchema))

const SelectOptionSchema = yup
  .object()
  .shape({
    label: yup.string().required(),
    value: yup.string().required(),
  })
  .nullable()
  .required("Обов'язкове поле")

const DeliveryServiceSchema = yup
  .object()
  .noUnknown(true)
  .shape({
    city: SelectOptionSchema,
    warehouse: SelectOptionSchema,
    type: yup.string().required('Оберіть спосіб доставки'),
  })

const CourierDeliverySchema = yup
  .object()
  .noUnknown(true)
  .shape({
    street: SelectOptionSchema,
    house: yup.string().max(10, 'Перевірте правильність введення будинку').required("Обов'язкове поле"),
    body: yup.string().max(10, 'Перевірте правильність введення корпусу'),
    apartment: yup.string().max(10, 'Перевірте правильність введення квартири'),
    type: yup.string().required('Оберіть спосіб доставки'),
  })

const ShippingSchema = yup.lazy(({ type }) => (type === 'Нова Пошта' ? DeliveryServiceSchema : CourierDeliverySchema))

const PaymentSchema = yup.object().shape({
  type: yup.string().required('Оберіть спосіб оплати'),
})

export const CheckoutSchema = yup.object().noUnknown(true).shape({
  contactInfo: ContactInfoSchema,
  shipping: ShippingSchema,
  payment: PaymentSchema,
})
