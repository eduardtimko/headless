// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CollectionByHandle = {
  __typename?: 'CollectionByHandle';
  title: Scalars['String'];
  description: Scalars['String'];
  products: CollectionByHandleResponse;
};

export type CollectionByHandleEntity = {
  __typename?: 'CollectionByHandleEntity';
  node: Product;
};

export type CollectionByHandleMetaData = {
  __typename?: 'CollectionByHandleMetaData';
  hasNextPage: Scalars['Boolean'];
};

export type CollectionByHandleResponse = {
  __typename?: 'CollectionByHandleResponse';
  pageInfo: CollectionByHandleMetaData;
  edges: Array<CollectionByHandleEntity>;
};

export type CompareAtPriceRangeType = {
  __typename?: 'CompareAtPriceRangeType';
  maxVariantPrice: PriceType;
  minVariantPrice: PriceType;
};

export type ComponentEntityResponse = {
  __typename?: 'ComponentEntityResponse';
  data: CrossSellEntity;
};

export type ComponentUiCrossSell = {
  __typename?: 'ComponentUiCrossSell';
  crossSell: ComponentEntityResponse;
};

export type ComponentUiPushProduct = {
  __typename?: 'ComponentUiPushProduct';
  pushProduct: PushProductEntityResponse;
};

export type ComponentUiSeoText = {
  __typename?: 'ComponentUiSeoText';
  seoText: SeoTextEntityResponse;
};

export type CrossSell = {
  __typename?: 'CrossSell';
  title: Scalars['String'];
  handle: Scalars['String'];
  default_count: Scalars['Int'];
  id: Scalars['ID'];
  shopify?: Maybe<CollectionByHandle>;
};

export type CrossSellEntity = {
  __typename?: 'CrossSellEntity';
  id: Scalars['ID'];
  attributes: CrossSell;
};

export type HomePage = {
  __typename?: 'HomePage';
  components?: Maybe<Array<Maybe<HomepageComponentsDynamicZone>>>;
};

export type HomepageComponentsDynamicZone = ComponentUiCrossSell | ComponentUiPushProduct | ComponentUiSeoText;

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID'];
  url: Scalars['String'];
  altText: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type Media = {
  __typename?: 'Media';
  mediaContentType: Scalars['String'];
  image: Image;
};

export type MediaEntity = {
  __typename?: 'MediaEntity';
  node: Media;
};

export type MediaResponse = {
  __typename?: 'MediaResponse';
  edges: Array<MediaEntity>;
};

export type Option = {
  __typename?: 'Option';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PriceRangeType = {
  __typename?: 'PriceRangeType';
  maxVariantPrice: PriceType;
  minVariantPrice: PriceType;
};

export type PriceType = {
  __typename?: 'PriceType';
  currencyCode: Scalars['String'];
  amount: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  descriptionHtml: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['ID'];
  compareAtPriceRange: CompareAtPriceRangeType;
  priceRange: PriceRangeType;
  media: MediaResponse;
  variants: VariantsResponse;
};

export type ProductsById = {
  __typename?: 'ProductsById';
  nodes?: Maybe<Array<Maybe<Product>>>;
};

export type PushProduct = {
  __typename?: 'PushProduct';
  title: Scalars['String'];
  productId: Scalars['String'];
  id: Scalars['ID'];
  shopify?: Maybe<PushProductResponse>;
};

export type PushProductEntity = {
  __typename?: 'PushProductEntity';
  id: Scalars['ID'];
  attributes: PushProduct;
};

export type PushProductEntityResponse = {
  __typename?: 'PushProductEntityResponse';
  data: PushProductEntity;
};

export type PushProductResponse = {
  __typename?: 'PushProductResponse';
  product?: Maybe<Product>;
};

export type Query = {
  __typename?: 'Query';
  homePage: HomePage;
  crossSell: ComponentUiCrossSell;
  pushProduct: ComponentUiPushProduct;
  seoText: ComponentUiSeoText;
};


export type QueryHomePageArgs = {
  country?: Maybe<Scalars['String']>;
};


export type QueryCrossSellArgs = {
  id: Scalars['ID'];
  count?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
};


export type QueryPushProductArgs = {
  id: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
};


export type QuerySeoTextArgs = {
  id: Scalars['ID'];
};

export type SeoText = {
  __typename?: 'SeoText';
  title: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
};

export type SeoTextEntity = {
  __typename?: 'SeoTextEntity';
  id: Scalars['ID'];
  attributes: SeoText;
};

export type SeoTextEntityResponse = {
  __typename?: 'SeoTextEntityResponse';
  data: SeoTextEntity;
};

export type Variant = {
  __typename?: 'Variant';
  id: Scalars['ID'];
  title: Scalars['String'];
  availableForSale: Scalars['Boolean'];
  image: Image;
  priceV2: PriceType;
  compareAtPriceV2: PriceType;
  selectedOptions: Array<Option>;
};

export type VariantsEntity = {
  __typename?: 'VariantsEntity';
  node: Variant;
};

export type VariantsResponse = {
  __typename?: 'VariantsResponse';
  edges: VariantsEntity;
};
