import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type AboutPage = {
  __typename?: 'AboutPage';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  image: UploadFileEntityResponse;
  seo: ComponentMainSeo;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutPageEntity = {
  __typename?: 'AboutPageEntity';
  attributes?: Maybe<AboutPage>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutPageEntityResponse = {
  __typename?: 'AboutPageEntityResponse';
  data?: Maybe<AboutPageEntity>;
};

export type AboutPageInput = {
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  seo?: InputMaybe<ComponentMainSeoInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  category: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  category?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeFaq = {
  __typename?: 'ComponentHomeFaq';
  faqItem: Array<Maybe<ComponentHomeFaqItem>>;
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type ComponentHomeFaqFaqItemArgs = {
  filters?: InputMaybe<ComponentHomeFaqItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeFaqInput = {
  faqItem?: InputMaybe<Array<InputMaybe<ComponentHomeFaqItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeFaqItem = {
  __typename?: 'ComponentHomeFaqItem';
  answer: Scalars['String'];
  id: Scalars['ID'];
  question: Scalars['String'];
};

export type ComponentHomeFaqItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomeFaqItemFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomeFaqItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeFaqItemFiltersInput>>>;
  question?: InputMaybe<StringFilterInput>;
};

export type ComponentHomeFaqItemInput = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  question?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeHero = {
  __typename?: 'ComponentHomeHero';
  background: UploadFileEntityResponse;
  description: Scalars['String'];
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  title: Scalars['String'];
};

export type ComponentHomeHeroInput = {
  background?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeTopSales = {
  __typename?: 'ComponentHomeTopSales';
  id: Scalars['ID'];
  products?: Maybe<ProductRelationResponseCollection>;
  title: Scalars['String'];
};


export type ComponentHomeTopSalesProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeTopSalesInput = {
  id?: InputMaybe<Scalars['ID']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeWhyUs = {
  __typename?: 'ComponentHomeWhyUs';
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  item: Array<Maybe<ComponentMainIconBox>>;
  title: Scalars['String'];
};


export type ComponentHomeWhyUsItemArgs = {
  filters?: InputMaybe<ComponentMainIconBoxFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeWhyUsInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  item?: InputMaybe<Array<InputMaybe<ComponentMainIconBoxInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentMainIconBox = {
  __typename?: 'ComponentMainIconBox';
  description: Scalars['String'];
  icon: UploadFileEntityResponse;
  id: Scalars['ID'];
};

export type ComponentMainIconBoxFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMainIconBoxFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMainIconBoxFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainIconBoxFiltersInput>>>;
};

export type ComponentMainIconBoxInput = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentMainPhoneNumbers = {
  __typename?: 'ComponentMainPhoneNumbers';
  id: Scalars['ID'];
  phone: Scalars['String'];
};

export type ComponentMainPhoneNumbersFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMainPhoneNumbersFiltersInput>>>;
  not?: InputMaybe<ComponentMainPhoneNumbersFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainPhoneNumbersFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
};

export type ComponentMainPhoneNumbersInput = {
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type ComponentMainSeo = {
  __typename?: 'ComponentMainSeo';
  id: Scalars['ID'];
  keywords: Scalars['String'];
  metaDescription: Scalars['String'];
  metaImage: UploadFileEntityResponse;
  metaTitle: Scalars['String'];
};

export type ComponentMainSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMainSeoFiltersInput>>>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMainSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainSeoFiltersInput>>>;
};

export type ComponentMainSeoInput = {
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaImage?: InputMaybe<Scalars['ID']>;
  metaTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentMainSocialNetworks = {
  __typename?: 'ComponentMainSocialNetworks';
  icon: Enum_Componentmainsocialnetworks_Icon;
  id: Scalars['ID'];
  link: Scalars['String'];
};

export type ComponentMainSocialNetworksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMainSocialNetworksFiltersInput>>>;
  icon?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMainSocialNetworksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainSocialNetworksFiltersInput>>>;
};

export type ComponentMainSocialNetworksInput = {
  icon?: InputMaybe<Enum_Componentmainsocialnetworks_Icon>;
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
};

export type ComponentMainWorkingHours = {
  __typename?: 'ComponentMainWorkingHours';
  id: Scalars['ID'];
  listItem?: Maybe<Scalars['String']>;
};

export type ComponentMainWorkingHoursFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMainWorkingHoursFiltersInput>>>;
  listItem?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMainWorkingHoursFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainWorkingHoursFiltersInput>>>;
};

export type ComponentMainWorkingHoursInput = {
  id?: InputMaybe<Scalars['ID']>;
  listItem?: InputMaybe<Scalars['String']>;
};

export type ComponentProductPreviewOptions = {
  __typename?: 'ComponentProductPreviewOptions';
  description: Scalars['String'];
  id: Scalars['ID'];
  option: Scalars['String'];
};

export type ComponentProductPreviewOptionsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProductPreviewOptionsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentProductPreviewOptionsFiltersInput>;
  option?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProductPreviewOptionsFiltersInput>>>;
};

export type ComponentProductPreviewOptionsInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  option?: InputMaybe<Scalars['String']>;
};

export type ComponentProductPrice = {
  __typename?: 'ComponentProductPrice';
  discountEndDate?: Maybe<Scalars['Date']>;
  discountPrice?: Maybe<Scalars['Float']>;
  discountStartDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  price: Scalars['Float'];
};

export type ComponentProductPriceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProductPriceFiltersInput>>>;
  discountEndDate?: InputMaybe<DateFilterInput>;
  discountPrice?: InputMaybe<FloatFilterInput>;
  discountStartDate?: InputMaybe<DateFilterInput>;
  not?: InputMaybe<ComponentProductPriceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProductPriceFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
};

export type ComponentProductPriceInput = {
  discountEndDate?: InputMaybe<Scalars['Date']>;
  discountPrice?: InputMaybe<Scalars['Float']>;
  discountStartDate?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type Contact = {
  __typename?: 'Contact';
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  phoneNumbers: Array<Maybe<ComponentMainPhoneNumbers>>;
  seo: ComponentMainSeo;
  socialNetworks: Array<Maybe<ComponentMainSocialNetworks>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workingHours: Array<Maybe<ComponentMainWorkingHours>>;
};


export type ContactPhoneNumbersArgs = {
  filters?: InputMaybe<ComponentMainPhoneNumbersFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContactSocialNetworksArgs = {
  filters?: InputMaybe<ComponentMainSocialNetworksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContactWorkingHoursArgs = {
  filters?: InputMaybe<ComponentMainWorkingHoursFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactInput = {
  email?: InputMaybe<Scalars['String']>;
  phoneNumbers?: InputMaybe<Array<InputMaybe<ComponentMainPhoneNumbersInput>>>;
  seo?: InputMaybe<ComponentMainSeoInput>;
  socialNetworks?: InputMaybe<Array<InputMaybe<ComponentMainSocialNetworksInput>>>;
  workingHours?: InputMaybe<Array<InputMaybe<ComponentMainWorkingHoursInput>>>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type DeliveryAndPayment = {
  __typename?: 'DeliveryAndPayment';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  seo: ComponentMainSeo;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliveryAndPaymentEntity = {
  __typename?: 'DeliveryAndPaymentEntity';
  attributes?: Maybe<DeliveryAndPayment>;
  id?: Maybe<Scalars['ID']>;
};

export type DeliveryAndPaymentEntityResponse = {
  __typename?: 'DeliveryAndPaymentEntityResponse';
  data?: Maybe<DeliveryAndPaymentEntity>;
};

export type DeliveryAndPaymentInput = {
  content?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentMainSeoInput>;
  title?: InputMaybe<Scalars['String']>;
};

export enum Enum_Componentmainsocialnetworks_Icon {
  Instagram = 'instagram',
  Telegram = 'telegram',
  Viber = 'viber',
  Whatsapp = 'whatsapp'
}

export enum Enum_Product_Status {
  TovarZakinchivsya = 'Tovar_zakinchivsya',
  YeVNayavnosti = 'Ye_v_nayavnosti',
  Zakinchuyetsya = 'Zakinchuyetsya'
}

export type ExchangeAndRefund = {
  __typename?: 'ExchangeAndRefund';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  seo: ComponentMainSeo;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ExchangeAndRefundEntity = {
  __typename?: 'ExchangeAndRefundEntity';
  attributes?: Maybe<ExchangeAndRefund>;
  id?: Maybe<Scalars['ID']>;
};

export type ExchangeAndRefundEntityResponse = {
  __typename?: 'ExchangeAndRefundEntityResponse';
  data?: Maybe<ExchangeAndRefundEntity>;
};

export type ExchangeAndRefundInput = {
  content?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentMainSeoInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type EzformsRecipient = {
  __typename?: 'EzformsRecipient';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EzformsRecipientEntity = {
  __typename?: 'EzformsRecipientEntity';
  attributes?: Maybe<EzformsRecipient>;
  id?: Maybe<Scalars['ID']>;
};

export type EzformsRecipientEntityResponse = {
  __typename?: 'EzformsRecipientEntityResponse';
  data?: Maybe<EzformsRecipientEntity>;
};

export type EzformsRecipientEntityResponseCollection = {
  __typename?: 'EzformsRecipientEntityResponseCollection';
  data: Array<EzformsRecipientEntity>;
  meta: ResponseCollectionMeta;
};

export type EzformsRecipientFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EzformsRecipientFiltersInput>;
  number?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EzformsRecipientInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
};

export type EzformsSubmission = {
  __typename?: 'EzformsSubmission';
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<Scalars['JSON']>;
  formName?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EzformsSubmissionEntity = {
  __typename?: 'EzformsSubmissionEntity';
  attributes?: Maybe<EzformsSubmission>;
  id?: Maybe<Scalars['ID']>;
};

export type EzformsSubmissionEntityResponse = {
  __typename?: 'EzformsSubmissionEntityResponse';
  data?: Maybe<EzformsSubmissionEntity>;
};

export type EzformsSubmissionEntityResponseCollection = {
  __typename?: 'EzformsSubmissionEntityResponseCollection';
  data: Array<EzformsSubmissionEntity>;
  meta: ResponseCollectionMeta;
};

export type EzformsSubmissionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  data?: InputMaybe<JsonFilterInput>;
  formName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<EzformsSubmissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>;
  score?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EzformsSubmissionInput = {
  data?: InputMaybe<Scalars['JSON']>;
  formName?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = AboutPage | Category | ComponentHomeFaq | ComponentHomeFaqItem | ComponentHomeHero | ComponentHomeTopSales | ComponentHomeWhyUs | ComponentMainIconBox | ComponentMainPhoneNumbers | ComponentMainSeo | ComponentMainSocialNetworks | ComponentMainWorkingHours | ComponentProductPreviewOptions | ComponentProductPrice | Contact | DeliveryAndPayment | ExchangeAndRefund | EzformsRecipient | EzformsSubmission | Global | HomePage | I18NLocale | Order | PrivacyPolicy | Product | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Global = {
  __typename?: 'Global';
  canonical: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  darkLogo: UploadFileEntityResponse;
  defaultDescription: Scalars['String'];
  defaultGraphImage: UploadFileEntityResponse;
  defaultTitle: Scalars['String'];
  favicon: UploadFileEntityResponse;
  lightLogo: UploadFileEntityResponse;
  siteName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  attributes?: Maybe<Global>;
  id?: Maybe<Scalars['ID']>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data?: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  canonical?: InputMaybe<Scalars['String']>;
  darkLogo?: InputMaybe<Scalars['ID']>;
  defaultDescription?: InputMaybe<Scalars['String']>;
  defaultGraphImage?: InputMaybe<Scalars['ID']>;
  defaultTitle?: InputMaybe<Scalars['String']>;
  favicon?: InputMaybe<Scalars['ID']>;
  lightLogo?: InputMaybe<Scalars['ID']>;
  siteName?: InputMaybe<Scalars['String']>;
};

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['DateTime']>;
  faq: ComponentHomeFaq;
  hero: ComponentHomeHero;
  seo: ComponentMainSeo;
  topSales: ComponentHomeTopSales;
  updatedAt?: Maybe<Scalars['DateTime']>;
  whyUs: ComponentHomeWhyUs;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  faq?: InputMaybe<ComponentHomeFaqInput>;
  hero?: InputMaybe<ComponentHomeHeroInput>;
  seo?: InputMaybe<ComponentMainSeoInput>;
  topSales?: InputMaybe<ComponentHomeTopSalesInput>;
  whyUs?: InputMaybe<ComponentHomeWhyUsInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  createEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  createOrder?: Maybe<OrderEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAboutPage?: Maybe<AboutPageEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteDeliveryAndPayment?: Maybe<DeliveryAndPaymentEntityResponse>;
  deleteExchangeAndRefund?: Maybe<ExchangeAndRefundEntityResponse>;
  deleteEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  deleteEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteOrder?: Maybe<OrderEntityResponse>;
  deletePrivacyPolicy?: Maybe<PrivacyPolicyEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?: Maybe<AboutPageEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateDeliveryAndPayment?: Maybe<DeliveryAndPaymentEntityResponse>;
  updateExchangeAndRefund?: Maybe<ExchangeAndRefundEntityResponse>;
  updateEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  updateEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateOrder?: Maybe<OrderEntityResponse>;
  updatePrivacyPolicy?: Maybe<PrivacyPolicyEntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateEzformsRecipientArgs = {
  data: EzformsRecipientInput;
};


export type MutationCreateEzformsSubmissionArgs = {
  data: EzformsSubmissionInput;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEzformsRecipientArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEzformsSubmissionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutPageArgs = {
  data: AboutPageInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
};


export type MutationUpdateDeliveryAndPaymentArgs = {
  data: DeliveryAndPaymentInput;
};


export type MutationUpdateExchangeAndRefundArgs = {
  data: ExchangeAndRefundInput;
};


export type MutationUpdateEzformsRecipientArgs = {
  data: EzformsRecipientInput;
  id: Scalars['ID'];
};


export type MutationUpdateEzformsSubmissionArgs = {
  data: EzformsSubmissionInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  id: Scalars['ID'];
};


export type MutationUpdatePrivacyPolicyArgs = {
  data: PrivacyPolicyInput;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']>;
  formData: Scalars['JSON'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderEntity = {
  __typename?: 'OrderEntity';
  attributes?: Maybe<Order>;
  id?: Maybe<Scalars['ID']>;
};

export type OrderEntityResponse = {
  __typename?: 'OrderEntityResponse';
  data?: Maybe<OrderEntity>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  data: Array<OrderEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  formData?: InputMaybe<JsonFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OrderInput = {
  formData?: InputMaybe<Scalars['JSON']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type PrivacyPolicy = {
  __typename?: 'PrivacyPolicy';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  seo: ComponentMainSeo;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PrivacyPolicyEntity = {
  __typename?: 'PrivacyPolicyEntity';
  attributes?: Maybe<PrivacyPolicy>;
  id?: Maybe<Scalars['ID']>;
};

export type PrivacyPolicyEntityResponse = {
  __typename?: 'PrivacyPolicyEntityResponse';
  data?: Maybe<PrivacyPolicyEntity>;
};

export type PrivacyPolicyInput = {
  content?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentMainSeoInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fullOptions: Array<Maybe<ComponentProductPreviewOptions>>;
  gallerySlider: UploadFileRelationResponseCollection;
  image: UploadFileEntityResponse;
  inStock: Scalars['Int'];
  name: Scalars['String'];
  previewOptions: Array<Maybe<ComponentProductPreviewOptions>>;
  price: ComponentProductPrice;
  seo: ComponentMainSeo;
  similars?: Maybe<ProductRelationResponseCollection>;
  slug: Scalars['String'];
  status: Enum_Product_Status;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProductFullOptionsArgs = {
  filters?: InputMaybe<ComponentProductPreviewOptionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductGallerySliderArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductPreviewOptionsArgs = {
  filters?: InputMaybe<ComponentProductPreviewOptionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductSimilarsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fullOptions?: InputMaybe<ComponentProductPreviewOptionsFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  inStock?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  previewOptions?: InputMaybe<ComponentProductPreviewOptionsFiltersInput>;
  price?: InputMaybe<ComponentProductPriceFiltersInput>;
  seo?: InputMaybe<ComponentMainSeoFiltersInput>;
  similars?: InputMaybe<ProductFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  category?: InputMaybe<Scalars['ID']>;
  fullOptions?: InputMaybe<Array<InputMaybe<ComponentProductPreviewOptionsInput>>>;
  gallerySlider?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image?: InputMaybe<Scalars['ID']>;
  inStock?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  previewOptions?: InputMaybe<Array<InputMaybe<ComponentProductPreviewOptionsInput>>>;
  price?: InputMaybe<ComponentProductPriceInput>;
  seo?: InputMaybe<ComponentMainSeoInput>;
  similars?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Enum_Product_Status>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export type Query = {
  __typename?: 'Query';
  aboutPage?: Maybe<AboutPageEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  contact?: Maybe<ContactEntityResponse>;
  deliveryAndPayment?: Maybe<DeliveryAndPaymentEntityResponse>;
  exchangeAndRefund?: Maybe<ExchangeAndRefundEntityResponse>;
  ezformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  ezformsRecipients?: Maybe<EzformsRecipientEntityResponseCollection>;
  ezformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  ezformsSubmissions?: Maybe<EzformsSubmissionEntityResponseCollection>;
  global?: Maybe<GlobalEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  order?: Maybe<OrderEntityResponse>;
  orders?: Maybe<OrderEntityResponseCollection>;
  privacyPolicy?: Maybe<PrivacyPolicyEntityResponse>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEzformsRecipientArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEzformsRecipientsArgs = {
  filters?: InputMaybe<EzformsRecipientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEzformsSubmissionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEzformsSubmissionsArgs = {
  filters?: InputMaybe<EzformsSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetAboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutPageQuery = { __typename?: 'Query', aboutPage?: { __typename?: 'AboutPageEntityResponse', data?: { __typename?: 'AboutPageEntity', attributes?: { __typename?: 'AboutPage', title: string, content: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, seo: { __typename?: 'ComponentMainSeo', metaTitle: string, metaDescription: string, keywords: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } } | null } | null } | null };

export type GetContactsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactsPageQuery = { __typename?: 'Query', contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', seo: { __typename?: 'ComponentMainSeo', metaTitle: string, metaDescription: string, keywords: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } } | null } | null } | null };

export type DeliveryAndPaymentQueryVariables = Exact<{ [key: string]: never; }>;


export type DeliveryAndPaymentQuery = { __typename?: 'Query', deliveryAndPayment?: { __typename?: 'DeliveryAndPaymentEntityResponse', data?: { __typename?: 'DeliveryAndPaymentEntity', attributes?: { __typename?: 'DeliveryAndPayment', title: string, content: string, seo: { __typename?: 'ComponentMainSeo', metaTitle: string, metaDescription: string, keywords: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } } | null } | null } | null };

export type ExchangeAndRefundQueryVariables = Exact<{ [key: string]: never; }>;


export type ExchangeAndRefundQuery = { __typename?: 'Query', exchangeAndRefund?: { __typename?: 'ExchangeAndRefundEntityResponse', data?: { __typename?: 'ExchangeAndRefundEntity', attributes?: { __typename?: 'ExchangeAndRefund', title: string, content: string, seo: { __typename?: 'ComponentMainSeo', metaTitle: string, metaDescription: string, keywords: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } } | null } | null } | null };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', hero: { __typename?: 'ComponentHomeHero', title: string, description: string, background: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } }, whyUs: { __typename?: 'ComponentHomeWhyUs', title: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, item: Array<{ __typename?: 'ComponentMainIconBox', id: string, description: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> }, topSales: { __typename?: 'ComponentHomeTopSales', title: string }, faq: { __typename?: 'ComponentHomeFaq', title: string, faqItem: Array<{ __typename?: 'ComponentHomeFaqItem', id: string, question: string, answer: string } | null> }, seo: { __typename?: 'ComponentMainSeo', metaTitle: string, metaDescription: string, keywords: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } } | null } | null } | null };

export type HomeTopSalesQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeTopSalesQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', topSales: { __typename?: 'ComponentHomeTopSales', products?: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, status: Enum_Product_Status, slug: string, inStock: number, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, previewOptions: Array<{ __typename?: 'ComponentProductPreviewOptions', id: string, option: string, description: string } | null>, price: { __typename?: 'ComponentProductPrice', price: number, discountPrice?: number | null, discountStartDate?: any | null, discountEndDate?: any | null } } | null }> } | null } } | null } | null } | null };

export type InitialDataQueryVariables = Exact<{ [key: string]: never; }>;


export type InitialDataQuery = { __typename?: 'Query', global?: { __typename?: 'GlobalEntityResponse', data?: { __typename?: 'GlobalEntity', attributes?: { __typename?: 'Global', siteName: string, defaultTitle: string, defaultDescription: string, canonical: string, lightLogo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, darkLogo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, favicon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, defaultGraphImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null } | null } | null, contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', email: string, phoneNumbers: Array<{ __typename?: 'ComponentMainPhoneNumbers', id: string, phone: string } | null>, socialNetworks: Array<{ __typename?: 'ComponentMainSocialNetworks', id: string, icon: Enum_Componentmainsocialnetworks_Icon, link: string } | null>, workingHours: Array<{ __typename?: 'ComponentMainWorkingHours', id: string, listItem?: string | null } | null> } | null } | null } | null };

export type PrivacyPolicyQueryVariables = Exact<{ [key: string]: never; }>;


export type PrivacyPolicyQuery = { __typename?: 'Query', privacyPolicy?: { __typename?: 'PrivacyPolicyEntityResponse', data?: { __typename?: 'PrivacyPolicyEntity', attributes?: { __typename?: 'PrivacyPolicy', title: string, content: string, seo: { __typename?: 'ComponentMainSeo', metaTitle: string, metaDescription: string, keywords: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } } | null } | null } | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', category: string } | null }> } | null };

export type GetSimilarProductsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetSimilarProductsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', similars?: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, status: Enum_Product_Status, slug: string, inStock: number, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, price: { __typename?: 'ComponentProductPrice', price: number, discountPrice?: number | null, discountStartDate?: any | null, discountEndDate?: any | null }, previewOptions: Array<{ __typename?: 'ComponentProductPreviewOptions', id: string, option: string, description: string } | null> } | null }> } | null } | null }> } | null };

export type GetProductPropsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetProductPropsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, status: Enum_Product_Status, inStock: number, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, previewOptions: Array<{ __typename?: 'ComponentProductPreviewOptions', id: string, option: string, description: string } | null>, gallerySlider: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> }, price: { __typename?: 'ComponentProductPrice', price: number, discountPrice?: number | null, discountStartDate?: any | null, discountEndDate?: any | null }, fullOptions: Array<{ __typename?: 'ComponentProductPreviewOptions', id: string, option: string, description: string } | null>, seo: { __typename?: 'ComponentMainSeo', metaTitle: string, metaDescription: string, keywords: string, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } } | null }> } | null };

export type GetProductsPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsPathsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', slug: string } | null }> } | null };

export type ProductsQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['ID']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  start?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, status: Enum_Product_Status, slug: string, inStock: number, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, price: { __typename?: 'ComponentProductPrice', price: number, discountPrice?: number | null, discountStartDate?: any | null, discountEndDate?: any | null }, previewOptions: Array<{ __typename?: 'ComponentProductPreviewOptions', id: string, option: string, description: string } | null> } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };


export const GetAboutPageDocument = gql`
    query GetAboutPage {
  aboutPage {
    data {
      attributes {
        title
        content
        image {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          keywords
        }
      }
    }
  }
}
    `;

/**
 * __useGetAboutPageQuery__
 *
 * To run a query within a React component, call `useGetAboutPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAboutPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAboutPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAboutPageQuery(baseOptions?: Apollo.QueryHookOptions<GetAboutPageQuery, GetAboutPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAboutPageQuery, GetAboutPageQueryVariables>(GetAboutPageDocument, options);
      }
export function useGetAboutPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAboutPageQuery, GetAboutPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAboutPageQuery, GetAboutPageQueryVariables>(GetAboutPageDocument, options);
        }
export type GetAboutPageQueryHookResult = ReturnType<typeof useGetAboutPageQuery>;
export type GetAboutPageLazyQueryHookResult = ReturnType<typeof useGetAboutPageLazyQuery>;
export type GetAboutPageQueryResult = Apollo.QueryResult<GetAboutPageQuery, GetAboutPageQueryVariables>;
export const GetContactsPageDocument = gql`
    query GetContactsPage {
  contact {
    data {
      attributes {
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          keywords
        }
      }
    }
  }
}
    `;

/**
 * __useGetContactsPageQuery__
 *
 * To run a query within a React component, call `useGetContactsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactsPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContactsPageQuery(baseOptions?: Apollo.QueryHookOptions<GetContactsPageQuery, GetContactsPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactsPageQuery, GetContactsPageQueryVariables>(GetContactsPageDocument, options);
      }
export function useGetContactsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactsPageQuery, GetContactsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactsPageQuery, GetContactsPageQueryVariables>(GetContactsPageDocument, options);
        }
export type GetContactsPageQueryHookResult = ReturnType<typeof useGetContactsPageQuery>;
export type GetContactsPageLazyQueryHookResult = ReturnType<typeof useGetContactsPageLazyQuery>;
export type GetContactsPageQueryResult = Apollo.QueryResult<GetContactsPageQuery, GetContactsPageQueryVariables>;
export const DeliveryAndPaymentDocument = gql`
    query DeliveryAndPayment {
  deliveryAndPayment {
    data {
      attributes {
        title
        content
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          keywords
        }
      }
    }
  }
}
    `;

/**
 * __useDeliveryAndPaymentQuery__
 *
 * To run a query within a React component, call `useDeliveryAndPaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryAndPaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryAndPaymentQuery({
 *   variables: {
 *   },
 * });
 */
export function useDeliveryAndPaymentQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryAndPaymentQuery, DeliveryAndPaymentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryAndPaymentQuery, DeliveryAndPaymentQueryVariables>(DeliveryAndPaymentDocument, options);
      }
export function useDeliveryAndPaymentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryAndPaymentQuery, DeliveryAndPaymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryAndPaymentQuery, DeliveryAndPaymentQueryVariables>(DeliveryAndPaymentDocument, options);
        }
export type DeliveryAndPaymentQueryHookResult = ReturnType<typeof useDeliveryAndPaymentQuery>;
export type DeliveryAndPaymentLazyQueryHookResult = ReturnType<typeof useDeliveryAndPaymentLazyQuery>;
export type DeliveryAndPaymentQueryResult = Apollo.QueryResult<DeliveryAndPaymentQuery, DeliveryAndPaymentQueryVariables>;
export const ExchangeAndRefundDocument = gql`
    query ExchangeAndRefund {
  exchangeAndRefund {
    data {
      attributes {
        title
        content
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          keywords
        }
      }
    }
  }
}
    `;

/**
 * __useExchangeAndRefundQuery__
 *
 * To run a query within a React component, call `useExchangeAndRefundQuery` and pass it any options that fit your needs.
 * When your component renders, `useExchangeAndRefundQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExchangeAndRefundQuery({
 *   variables: {
 *   },
 * });
 */
export function useExchangeAndRefundQuery(baseOptions?: Apollo.QueryHookOptions<ExchangeAndRefundQuery, ExchangeAndRefundQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExchangeAndRefundQuery, ExchangeAndRefundQueryVariables>(ExchangeAndRefundDocument, options);
      }
export function useExchangeAndRefundLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExchangeAndRefundQuery, ExchangeAndRefundQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExchangeAndRefundQuery, ExchangeAndRefundQueryVariables>(ExchangeAndRefundDocument, options);
        }
export type ExchangeAndRefundQueryHookResult = ReturnType<typeof useExchangeAndRefundQuery>;
export type ExchangeAndRefundLazyQueryHookResult = ReturnType<typeof useExchangeAndRefundLazyQuery>;
export type ExchangeAndRefundQueryResult = Apollo.QueryResult<ExchangeAndRefundQuery, ExchangeAndRefundQueryVariables>;
export const HomePageDocument = gql`
    query HomePage {
  homePage {
    data {
      attributes {
        hero {
          title
          description
          background {
            data {
              attributes {
                url
              }
            }
          }
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
        whyUs {
          title
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          item {
            id
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            description
          }
        }
        topSales {
          title
        }
        faq {
          title
          faqItem {
            id
            question
            answer
          }
        }
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          keywords
        }
      }
    }
  }
}
    `;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomePageQuery(baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
      }
export function useHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<typeof useHomePageLazyQuery>;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;
export const HomeTopSalesDocument = gql`
    query HomeTopSales {
  homePage {
    data {
      attributes {
        topSales {
          products {
            data {
              id
              attributes {
                name
                status
                slug
                image {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                previewOptions {
                  id
                  option
                  description
                }
                price {
                  price
                  discountPrice
                  discountStartDate
                  discountEndDate
                }
                inStock
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useHomeTopSalesQuery__
 *
 * To run a query within a React component, call `useHomeTopSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeTopSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeTopSalesQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeTopSalesQuery(baseOptions?: Apollo.QueryHookOptions<HomeTopSalesQuery, HomeTopSalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeTopSalesQuery, HomeTopSalesQueryVariables>(HomeTopSalesDocument, options);
      }
export function useHomeTopSalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeTopSalesQuery, HomeTopSalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeTopSalesQuery, HomeTopSalesQueryVariables>(HomeTopSalesDocument, options);
        }
export type HomeTopSalesQueryHookResult = ReturnType<typeof useHomeTopSalesQuery>;
export type HomeTopSalesLazyQueryHookResult = ReturnType<typeof useHomeTopSalesLazyQuery>;
export type HomeTopSalesQueryResult = Apollo.QueryResult<HomeTopSalesQuery, HomeTopSalesQueryVariables>;
export const InitialDataDocument = gql`
    query InitialData {
  global {
    data {
      attributes {
        lightLogo {
          data {
            attributes {
              url
            }
          }
        }
        darkLogo {
          data {
            attributes {
              url
            }
          }
        }
        favicon {
          data {
            attributes {
              url
            }
          }
        }
        siteName
        defaultTitle
        defaultDescription
        defaultGraphImage {
          data {
            attributes {
              url
            }
          }
        }
        canonical
      }
    }
  }
  contact {
    data {
      attributes {
        email
        phoneNumbers {
          id
          phone
        }
        socialNetworks {
          id
          icon
          link
        }
        workingHours {
          id
          listItem
        }
      }
    }
  }
}
    `;

/**
 * __useInitialDataQuery__
 *
 * To run a query within a React component, call `useInitialDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useInitialDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInitialDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useInitialDataQuery(baseOptions?: Apollo.QueryHookOptions<InitialDataQuery, InitialDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InitialDataQuery, InitialDataQueryVariables>(InitialDataDocument, options);
      }
export function useInitialDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InitialDataQuery, InitialDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InitialDataQuery, InitialDataQueryVariables>(InitialDataDocument, options);
        }
export type InitialDataQueryHookResult = ReturnType<typeof useInitialDataQuery>;
export type InitialDataLazyQueryHookResult = ReturnType<typeof useInitialDataLazyQuery>;
export type InitialDataQueryResult = Apollo.QueryResult<InitialDataQuery, InitialDataQueryVariables>;
export const PrivacyPolicyDocument = gql`
    query PrivacyPolicy {
  privacyPolicy {
    data {
      attributes {
        title
        content
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          keywords
        }
      }
    }
  }
}
    `;

/**
 * __usePrivacyPolicyQuery__
 *
 * To run a query within a React component, call `usePrivacyPolicyQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrivacyPolicyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrivacyPolicyQuery({
 *   variables: {
 *   },
 * });
 */
export function usePrivacyPolicyQuery(baseOptions?: Apollo.QueryHookOptions<PrivacyPolicyQuery, PrivacyPolicyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PrivacyPolicyQuery, PrivacyPolicyQueryVariables>(PrivacyPolicyDocument, options);
      }
export function usePrivacyPolicyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PrivacyPolicyQuery, PrivacyPolicyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PrivacyPolicyQuery, PrivacyPolicyQueryVariables>(PrivacyPolicyDocument, options);
        }
export type PrivacyPolicyQueryHookResult = ReturnType<typeof usePrivacyPolicyQuery>;
export type PrivacyPolicyLazyQueryHookResult = ReturnType<typeof usePrivacyPolicyLazyQuery>;
export type PrivacyPolicyQueryResult = Apollo.QueryResult<PrivacyPolicyQuery, PrivacyPolicyQueryVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  categories {
    data {
      id
      attributes {
        category
      }
    }
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetSimilarProductsDocument = gql`
    query GetSimilarProducts($id: ID) {
  products(filters: {id: {eq: $id}}) {
    data {
      id
      attributes {
        similars {
          data {
            id
            attributes {
              name
              status
              slug
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              price {
                price
                discountPrice
                discountStartDate
                discountEndDate
              }
              previewOptions {
                id
                option
                description
              }
              inStock
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetSimilarProductsQuery__
 *
 * To run a query within a React component, call `useGetSimilarProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSimilarProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSimilarProductsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSimilarProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetSimilarProductsQuery, GetSimilarProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSimilarProductsQuery, GetSimilarProductsQueryVariables>(GetSimilarProductsDocument, options);
      }
export function useGetSimilarProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSimilarProductsQuery, GetSimilarProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSimilarProductsQuery, GetSimilarProductsQueryVariables>(GetSimilarProductsDocument, options);
        }
export type GetSimilarProductsQueryHookResult = ReturnType<typeof useGetSimilarProductsQuery>;
export type GetSimilarProductsLazyQueryHookResult = ReturnType<typeof useGetSimilarProductsLazyQuery>;
export type GetSimilarProductsQueryResult = Apollo.QueryResult<GetSimilarProductsQuery, GetSimilarProductsQueryVariables>;
export const GetProductPropsDocument = gql`
    query GetProductProps($slug: String) {
  products(filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        name
        status
        image {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        previewOptions {
          id
          option
          description
        }
        gallerySlider {
          data {
            id
            attributes {
              url
              alternativeText
            }
          }
        }
        price {
          price
          discountPrice
          discountStartDate
          discountEndDate
        }
        inStock
        fullOptions {
          id
          option
          description
        }
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          keywords
        }
      }
    }
  }
}
    `;

/**
 * __useGetProductPropsQuery__
 *
 * To run a query within a React component, call `useGetProductPropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductPropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductPropsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProductPropsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductPropsQuery, GetProductPropsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductPropsQuery, GetProductPropsQueryVariables>(GetProductPropsDocument, options);
      }
export function useGetProductPropsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductPropsQuery, GetProductPropsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductPropsQuery, GetProductPropsQueryVariables>(GetProductPropsDocument, options);
        }
export type GetProductPropsQueryHookResult = ReturnType<typeof useGetProductPropsQuery>;
export type GetProductPropsLazyQueryHookResult = ReturnType<typeof useGetProductPropsLazyQuery>;
export type GetProductPropsQueryResult = Apollo.QueryResult<GetProductPropsQuery, GetProductPropsQueryVariables>;
export const GetProductsPathsDocument = gql`
    query GetProductsPaths {
  products {
    data {
      id
      attributes {
        slug
      }
    }
  }
}
    `;

/**
 * __useGetProductsPathsQuery__
 *
 * To run a query within a React component, call `useGetProductsPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsPathsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsPathsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsPathsQuery, GetProductsPathsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsPathsQuery, GetProductsPathsQueryVariables>(GetProductsPathsDocument, options);
      }
export function useGetProductsPathsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsPathsQuery, GetProductsPathsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsPathsQuery, GetProductsPathsQueryVariables>(GetProductsPathsDocument, options);
        }
export type GetProductsPathsQueryHookResult = ReturnType<typeof useGetProductsPathsQuery>;
export type GetProductsPathsLazyQueryHookResult = ReturnType<typeof useGetProductsPathsLazyQuery>;
export type GetProductsPathsQueryResult = Apollo.QueryResult<GetProductsPathsQuery, GetProductsPathsQueryVariables>;
export const ProductsDocument = gql`
    query Products($categoryId: ID, $sortBy: [String], $start: Int, $limit: Int) {
  products(
    filters: {category: {id: {eq: $categoryId}}}
    sort: $sortBy
    pagination: {start: $start, limit: $limit}
  ) {
    data {
      id
      attributes {
        name
        status
        slug
        image {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        price {
          price
          discountPrice
          discountStartDate
          discountEndDate
        }
        previewOptions {
          id
          option
          description
        }
        inStock
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      sortBy: // value for 'sortBy'
 *      start: // value for 'start'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;