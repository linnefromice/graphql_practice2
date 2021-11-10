import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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

/** task */
export type Task = {
  __typename?: 'Task';
  /** 説明本文 */
  description: Scalars['String'];
  id: Scalars['ID'];
  /** 削除済みか */
  isDeleted: Scalars['Boolean'];
  /** 完了済みか */
  isFinished: Scalars['Boolean'];
  /** タイトル */
  title: Scalars['String'];
  /** バージョン */
  version: Scalars['Int'];
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


export type GetTasksQuery = { __typename?: 'Query', tasks: { __typename?: 'TaskConnection', edges?: Array<{ __typename?: 'TaskEdge', node?: { __typename?: 'Task', id: string, title: string, description: string, isFinished: boolean, isDeleted: boolean, version: number } | null | undefined } | null | undefined> | null | undefined, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null | undefined, endCursor?: string | null | undefined, hasPreviousPage: boolean, hasNextPage: boolean } } };


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

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetTasksQuery(baseOptions?: Apollo.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
      }
export function useGetTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
        }
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksQueryResult = Apollo.QueryResult<GetTasksQuery, GetTasksQueryVariables>;