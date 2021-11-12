import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Find last task */
  lastTask?: Maybe<Task>;
  /** Find tasks */
  tasks: TaskConnection;
  /** An example field added by the generator */
  testField: Scalars['String'];
};


export type QueryTasksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['ISO8601DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  isFinished?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  version?: Maybe<Scalars['Int']>;
};

/** The connection type for Task. */
export type TaskConnection = {
  __typename?: 'TaskConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TaskEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Task>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TaskEdge = {
  __typename?: 'TaskEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Task>;
};

export type GetTasksQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
}>;


export type GetTasksQuery = { __typename?: 'Query', tasks: { __typename?: 'TaskConnection', edges?: Array<{ __typename?: 'TaskEdge', node?: { __typename?: 'Task', id: string, title?: string | null | undefined, description?: string | null | undefined, isFinished?: boolean | null | undefined, isDeleted?: boolean | null | undefined, version?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null | undefined, endCursor?: string | null | undefined, hasPreviousPage: boolean, hasNextPage: boolean } } };


export const GetTasksDocument = gql`
    query GetTasks($after: String) {
  tasks(first: 3, after: $after) {
    edges {
      node {
        id
        title
        description
        isFinished
        isDeleted
        version
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
  }
}
    `;

export function useGetTasksQuery(options: Omit<Urql.UseQueryArgs<GetTasksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetTasksQuery>({ query: GetTasksDocument, ...options });
};