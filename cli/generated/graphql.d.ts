import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigInt: any;
    Cursor: any;
    Datetime: any;
    JSON: any;
};
/** An object with a globally unique `ID`. */
export declare type Node = {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID'];
};
export declare type ObjectList = Node & {
    __typename?: 'ObjectList';
    createTime: Scalars['Datetime'];
    dataType: Scalars['String'];
    digest: Scalars['String'];
    fields?: Maybe<Scalars['JSON']>;
    hasPublicTransfer?: Maybe<Scalars['Boolean']>;
    isUpdate: Scalars['Boolean'];
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars['ID'];
    objectId: Scalars['String'];
    owner: Scalars['JSON'];
    previousTransaction: Scalars['String'];
    status: SuiIndexerObjectListStatus;
    storageRebate: Scalars['BigInt'];
    type?: Maybe<Scalars['String']>;
    updateTime: Scalars['Datetime'];
    version: Scalars['BigInt'];
};
/**
 * A condition to be used against `ObjectList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export declare type ObjectListCondition = {
    /** Checks for equality with the object’s `createTime` field. */
    createTime?: InputMaybe<Scalars['Datetime']>;
    /** Checks for equality with the object’s `dataType` field. */
    dataType?: InputMaybe<Scalars['String']>;
    /** Checks for equality with the object’s `digest` field. */
    digest?: InputMaybe<Scalars['String']>;
    /** Checks for equality with the object’s `fields` field. */
    fields?: InputMaybe<Scalars['JSON']>;
    /** Checks for equality with the object’s `hasPublicTransfer` field. */
    hasPublicTransfer?: InputMaybe<Scalars['Boolean']>;
    /** Checks for equality with the object’s `isUpdate` field. */
    isUpdate?: InputMaybe<Scalars['Boolean']>;
    /** Checks for equality with the object’s `objectId` field. */
    objectId?: InputMaybe<Scalars['String']>;
    /** Checks for equality with the object’s `owner` field. */
    owner?: InputMaybe<Scalars['JSON']>;
    /** Checks for equality with the object’s `previousTransaction` field. */
    previousTransaction?: InputMaybe<Scalars['String']>;
    /** Checks for equality with the object’s `status` field. */
    status?: InputMaybe<SuiIndexerObjectListStatus>;
    /** Checks for equality with the object’s `storageRebate` field. */
    storageRebate?: InputMaybe<Scalars['BigInt']>;
    /** Checks for equality with the object’s `type` field. */
    type?: InputMaybe<Scalars['String']>;
    /** Checks for equality with the object’s `updateTime` field. */
    updateTime?: InputMaybe<Scalars['Datetime']>;
    /** Checks for equality with the object’s `version` field. */
    version?: InputMaybe<Scalars['BigInt']>;
};
/** A connection to a list of `ObjectList` values. */
export declare type ObjectListsConnection = {
    __typename?: 'ObjectListsConnection';
    /** A list of edges which contains the `ObjectList` and cursor to aid in pagination. */
    edges: Array<ObjectListsEdge>;
    /** A list of `ObjectList` objects. */
    nodes: Array<ObjectList>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `ObjectList` you could get from the connection. */
    totalCount: Scalars['Int'];
};
/** A `ObjectList` edge in the connection. */
export declare type ObjectListsEdge = {
    __typename?: 'ObjectListsEdge';
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars['Cursor']>;
    /** The `ObjectList` at the end of the edge. */
    node: ObjectList;
};
/** Methods to use when ordering `ObjectList`. */
export declare enum ObjectListsOrderBy {
    CreateTimeAsc = "CREATE_TIME_ASC",
    CreateTimeDesc = "CREATE_TIME_DESC",
    DataTypeAsc = "DATA_TYPE_ASC",
    DataTypeDesc = "DATA_TYPE_DESC",
    DigestAsc = "DIGEST_ASC",
    DigestDesc = "DIGEST_DESC",
    FieldsAsc = "FIELDS_ASC",
    FieldsDesc = "FIELDS_DESC",
    HasPublicTransferAsc = "HAS_PUBLIC_TRANSFER_ASC",
    HasPublicTransferDesc = "HAS_PUBLIC_TRANSFER_DESC",
    IsUpdateAsc = "IS_UPDATE_ASC",
    IsUpdateDesc = "IS_UPDATE_DESC",
    Natural = "NATURAL",
    ObjectIdAsc = "OBJECT_ID_ASC",
    ObjectIdDesc = "OBJECT_ID_DESC",
    OwnerAsc = "OWNER_ASC",
    OwnerDesc = "OWNER_DESC",
    PreviousTransactionAsc = "PREVIOUS_TRANSACTION_ASC",
    PreviousTransactionDesc = "PREVIOUS_TRANSACTION_DESC",
    PrimaryKeyAsc = "PRIMARY_KEY_ASC",
    PrimaryKeyDesc = "PRIMARY_KEY_DESC",
    StatusAsc = "STATUS_ASC",
    StatusDesc = "STATUS_DESC",
    StorageRebateAsc = "STORAGE_REBATE_ASC",
    StorageRebateDesc = "STORAGE_REBATE_DESC",
    TypeAsc = "TYPE_ASC",
    TypeDesc = "TYPE_DESC",
    UpdateTimeAsc = "UPDATE_TIME_ASC",
    UpdateTimeDesc = "UPDATE_TIME_DESC",
    VersionAsc = "VERSION_ASC",
    VersionDesc = "VERSION_DESC"
}
/** Information about pagination in a connection. */
export declare type PageInfo = {
    __typename?: 'PageInfo';
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['Cursor']>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['Cursor']>;
};
/** The root query type which gives access points into the data universe. */
export declare type Query = Node & {
    __typename?: 'Query';
    /** Reads and enables pagination through a set of `ObjectList`. */
    allObjectLists?: Maybe<ObjectListsConnection>;
    /** Fetches an object given its globally unique `ID`. */
    node?: Maybe<Node>;
    /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
    nodeId: Scalars['ID'];
    /** Reads a single `ObjectList` using its globally unique `ID`. */
    objectList?: Maybe<ObjectList>;
    objectListByObjectId?: Maybe<ObjectList>;
    objectListByObjectIdAndVersion?: Maybe<ObjectList>;
    /**
     * Exposes the root query type nested one level down. This is helpful for Relay 1
     * which can only query top level fields if they are in a particular form.
     */
    query: Query;
    /** Reads and enables pagination through a set of `ObjectList`. */
    searchObjectByOwner?: Maybe<ObjectListsConnection>;
};
/** The root query type which gives access points into the data universe. */
export declare type QueryAllObjectListsArgs = {
    after?: InputMaybe<Scalars['Cursor']>;
    before?: InputMaybe<Scalars['Cursor']>;
    condition?: InputMaybe<ObjectListCondition>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<ObjectListsOrderBy>>;
};
/** The root query type which gives access points into the data universe. */
export declare type QueryNodeArgs = {
    nodeId: Scalars['ID'];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryObjectListArgs = {
    nodeId: Scalars['ID'];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryObjectListByObjectIdArgs = {
    objectId: Scalars['String'];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryObjectListByObjectIdAndVersionArgs = {
    objectId: Scalars['String'];
    version: Scalars['BigInt'];
};
/** The root query type which gives access points into the data universe. */
export declare type QuerySearchObjectByOwnerArgs = {
    after?: InputMaybe<Scalars['Cursor']>;
    before?: InputMaybe<Scalars['Cursor']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    owner?: InputMaybe<Scalars['JSON']>;
};
export declare enum SuiIndexerObjectListStatus {
    Deleted = "DELETED",
    Exists = "EXISTS",
    NotExists = "NOT_EXISTS"
}
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export declare type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = {
    BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
    Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    JSON: ResolverTypeWrapper<Scalars['JSON']>;
    Node: ResolversTypes['ObjectList'] | ResolversTypes['Query'];
    ObjectList: ResolverTypeWrapper<ObjectList>;
    ObjectListCondition: ObjectListCondition;
    ObjectListsConnection: ResolverTypeWrapper<ObjectListsConnection>;
    ObjectListsEdge: ResolverTypeWrapper<ObjectListsEdge>;
    ObjectListsOrderBy: ObjectListsOrderBy;
    PageInfo: ResolverTypeWrapper<PageInfo>;
    Query: ResolverTypeWrapper<{}>;
    String: ResolverTypeWrapper<Scalars['String']>;
    SuiIndexerObjectListStatus: SuiIndexerObjectListStatus;
};
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = {
    BigInt: Scalars['BigInt'];
    Boolean: Scalars['Boolean'];
    Cursor: Scalars['Cursor'];
    Datetime: Scalars['Datetime'];
    ID: Scalars['ID'];
    Int: Scalars['Int'];
    JSON: Scalars['JSON'];
    Node: ResolversParentTypes['ObjectList'] | ResolversParentTypes['Query'];
    ObjectList: ObjectList;
    ObjectListCondition: ObjectListCondition;
    ObjectListsConnection: ObjectListsConnection;
    ObjectListsEdge: ObjectListsEdge;
    PageInfo: PageInfo;
    Query: {};
    String: Scalars['String'];
};
export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
    name: 'BigInt';
}
export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
    name: 'Cursor';
}
export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
    name: 'Datetime';
}
export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
    name: 'JSON';
}
export declare type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
    __resolveType: TypeResolveFn<'ObjectList' | 'Query', ParentType, ContextType>;
    nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};
export declare type ObjectListResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObjectList'] = ResolversParentTypes['ObjectList']> = {
    createTime?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
    dataType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    digest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    hasPublicTransfer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isUpdate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    objectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    owner?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
    previousTransaction?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['SuiIndexerObjectListStatus'], ParentType, ContextType>;
    storageRebate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updateTime?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
    version?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type ObjectListsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObjectListsConnection'] = ResolversParentTypes['ObjectListsConnection']> = {
    edges?: Resolver<Array<ResolversTypes['ObjectListsEdge']>, ParentType, ContextType>;
    nodes?: Resolver<Array<ResolversTypes['ObjectList']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type ObjectListsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObjectListsEdge'] = ResolversParentTypes['ObjectListsEdge']> = {
    cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
    node?: Resolver<ResolversTypes['ObjectList'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
    endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
    hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    allObjectLists?: Resolver<Maybe<ResolversTypes['ObjectListsConnection']>, ParentType, ContextType, RequireFields<QueryAllObjectListsArgs, 'orderBy'>>;
    node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>;
    nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    objectList?: Resolver<Maybe<ResolversTypes['ObjectList']>, ParentType, ContextType, RequireFields<QueryObjectListArgs, 'nodeId'>>;
    objectListByObjectId?: Resolver<Maybe<ResolversTypes['ObjectList']>, ParentType, ContextType, RequireFields<QueryObjectListByObjectIdArgs, 'objectId'>>;
    objectListByObjectIdAndVersion?: Resolver<Maybe<ResolversTypes['ObjectList']>, ParentType, ContextType, RequireFields<QueryObjectListByObjectIdAndVersionArgs, 'objectId' | 'version'>>;
    query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
    searchObjectByOwner?: Resolver<Maybe<ResolversTypes['ObjectListsConnection']>, ParentType, ContextType, Partial<QuerySearchObjectByOwnerArgs>>;
};
export declare type Resolvers<ContextType = any> = {
    BigInt?: GraphQLScalarType;
    Cursor?: GraphQLScalarType;
    Datetime?: GraphQLScalarType;
    JSON?: GraphQLScalarType;
    Node?: NodeResolvers<ContextType>;
    ObjectList?: ObjectListResolvers<ContextType>;
    ObjectListsConnection?: ObjectListsConnectionResolvers<ContextType>;
    ObjectListsEdge?: ObjectListsEdgeResolvers<ContextType>;
    PageInfo?: PageInfoResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
};
//# sourceMappingURL=graphql.d.ts.map