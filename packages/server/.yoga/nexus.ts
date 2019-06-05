/**
 * This file was automatically generated by Nexus 0.11.6
 * Do not make changes to this file directly
 */

import * as ctx from "../src/context"
import * as prisma from "./prisma-client/index"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  TutorialWhereInput: { // input type
    AND?: NexusGenInputs['TutorialWhereInput'][] | null; // [TutorialWhereInput!]
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    gatsbyID?: string | null; // String
    gatsbyID_contains?: string | null; // String
    gatsbyID_ends_with?: string | null; // String
    gatsbyID_gt?: string | null; // String
    gatsbyID_gte?: string | null; // String
    gatsbyID_in?: string[] | null; // [String!]
    gatsbyID_lt?: string | null; // String
    gatsbyID_lte?: string | null; // String
    gatsbyID_not?: string | null; // String
    gatsbyID_not_contains?: string | null; // String
    gatsbyID_not_ends_with?: string | null; // String
    gatsbyID_not_in?: string[] | null; // [String!]
    gatsbyID_not_starts_with?: string | null; // String
    gatsbyID_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['TutorialWhereInput'][] | null; // [TutorialWhereInput!]
    numberofChapters?: number | null; // Int
    numberofChapters_gt?: number | null; // Int
    numberofChapters_gte?: number | null; // Int
    numberofChapters_in?: number[] | null; // [Int!]
    numberofChapters_lt?: number | null; // Int
    numberofChapters_lte?: number | null; // Int
    numberofChapters_not?: number | null; // Int
    numberofChapters_not_in?: number[] | null; // [Int!]
    numberofStudents?: number | null; // Int
    numberofStudents_gt?: number | null; // Int
    numberofStudents_gte?: number | null; // Int
    numberofStudents_in?: number[] | null; // [Int!]
    numberofStudents_lt?: number | null; // Int
    numberofStudents_lte?: number | null; // Int
    numberofStudents_not?: number | null; // Int
    numberofStudents_not_in?: number[] | null; // [Int!]
    OR?: NexusGenInputs['TutorialWhereInput'][] | null; // [TutorialWhereInput!]
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
    upvotes?: number | null; // Int
    upvotes_gt?: number | null; // Int
    upvotes_gte?: number | null; // Int
    upvotes_in?: number[] | null; // [Int!]
    upvotes_lt?: number | null; // Int
    upvotes_lte?: number | null; // Int
    upvotes_not?: number | null; // Int
    upvotes_not_in?: number[] | null; // [Int!]
    userTutorials_every?: NexusGenInputs['UserTutorialWhereInput'] | null; // UserTutorialWhereInput
    userTutorials_none?: NexusGenInputs['UserTutorialWhereInput'] | null; // UserTutorialWhereInput
    userTutorials_some?: NexusGenInputs['UserTutorialWhereInput'] | null; // UserTutorialWhereInput
  }
  UserTutorialWhereInput: { // input type
    AND?: NexusGenInputs['UserTutorialWhereInput'][] | null; // [UserTutorialWhereInput!]
    bookmarked?: boolean | null; // Boolean
    bookmarked_not?: boolean | null; // Boolean
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    currentChapter?: number | null; // Int
    currentChapter_gt?: number | null; // Int
    currentChapter_gte?: number | null; // Int
    currentChapter_in?: number[] | null; // [Int!]
    currentChapter_lt?: number | null; // Int
    currentChapter_lte?: number | null; // Int
    currentChapter_not?: number | null; // Int
    currentChapter_not_in?: number[] | null; // [Int!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['UserTutorialWhereInput'][] | null; // [UserTutorialWhereInput!]
    OR?: NexusGenInputs['UserTutorialWhereInput'][] | null; // [UserTutorialWhereInput!]
    tutorial?: NexusGenInputs['TutorialWhereInput'] | null; // TutorialWhereInput
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
    upvoted?: boolean | null; // Boolean
    upvoted_not?: boolean | null; // Boolean
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    avatarUrl?: string | null; // String
    avatarUrl_contains?: string | null; // String
    avatarUrl_ends_with?: string | null; // String
    avatarUrl_gt?: string | null; // String
    avatarUrl_gte?: string | null; // String
    avatarUrl_in?: string[] | null; // [String!]
    avatarUrl_lt?: string | null; // String
    avatarUrl_lte?: string | null; // String
    avatarUrl_not?: string | null; // String
    avatarUrl_not_contains?: string | null; // String
    avatarUrl_not_ends_with?: string | null; // String
    avatarUrl_not_in?: string[] | null; // [String!]
    avatarUrl_not_starts_with?: string | null; // String
    avatarUrl_starts_with?: string | null; // String
    bio?: string | null; // String
    bio_contains?: string | null; // String
    bio_ends_with?: string | null; // String
    bio_gt?: string | null; // String
    bio_gte?: string | null; // String
    bio_in?: string[] | null; // [String!]
    bio_lt?: string | null; // String
    bio_lte?: string | null; // String
    bio_not?: string | null; // String
    bio_not_contains?: string | null; // String
    bio_not_ends_with?: string | null; // String
    bio_not_in?: string[] | null; // [String!]
    bio_not_starts_with?: string | null; // String
    bio_starts_with?: string | null; // String
    contributor?: boolean | null; // Boolean
    contributor_not?: boolean | null; // Boolean
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    expertise?: string | null; // String
    expertise_contains?: string | null; // String
    expertise_ends_with?: string | null; // String
    expertise_gt?: string | null; // String
    expertise_gte?: string | null; // String
    expertise_in?: string[] | null; // [String!]
    expertise_lt?: string | null; // String
    expertise_lte?: string | null; // String
    expertise_not?: string | null; // String
    expertise_not_contains?: string | null; // String
    expertise_not_ends_with?: string | null; // String
    expertise_not_in?: string[] | null; // [String!]
    expertise_not_starts_with?: string | null; // String
    expertise_starts_with?: string | null; // String
    githubHandle?: string | null; // String
    githubHandle_contains?: string | null; // String
    githubHandle_ends_with?: string | null; // String
    githubHandle_gt?: string | null; // String
    githubHandle_gte?: string | null; // String
    githubHandle_in?: string[] | null; // [String!]
    githubHandle_lt?: string | null; // String
    githubHandle_lte?: string | null; // String
    githubHandle_not?: string | null; // String
    githubHandle_not_contains?: string | null; // String
    githubHandle_not_ends_with?: string | null; // String
    githubHandle_not_in?: string[] | null; // [String!]
    githubHandle_not_starts_with?: string | null; // String
    githubHandle_starts_with?: string | null; // String
    githubUserId?: string | null; // String
    githubUserId_contains?: string | null; // String
    githubUserId_ends_with?: string | null; // String
    githubUserId_gt?: string | null; // String
    githubUserId_gte?: string | null; // String
    githubUserId_in?: string[] | null; // [String!]
    githubUserId_lt?: string | null; // String
    githubUserId_lte?: string | null; // String
    githubUserId_not?: string | null; // String
    githubUserId_not_contains?: string | null; // String
    githubUserId_not_ends_with?: string | null; // String
    githubUserId_not_in?: string[] | null; // [String!]
    githubUserId_not_starts_with?: string | null; // String
    githubUserId_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
    userTutorials_every?: NexusGenInputs['UserTutorialWhereInput'] | null; // UserTutorialWhereInput
    userTutorials_none?: NexusGenInputs['UserTutorialWhereInput'] | null; // UserTutorialWhereInput
    userTutorials_some?: NexusGenInputs['UserTutorialWhereInput'] | null; // UserTutorialWhereInput
  }
}

export interface NexusGenEnums {
  UserTutorialOrderByInput: "bookmarked_ASC" | "bookmarked_DESC" | "createdAt_ASC" | "createdAt_DESC" | "currentChapter_ASC" | "currentChapter_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "upvoted_ASC" | "upvoted_DESC"
}

export interface NexusGenRootTypes {
  AuthenticateUserPayload: { // root type
    code?: string | null; // String
    message?: string | null; // String
    success: boolean; // Boolean!
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Mutation: {};
  Query: {};
  Tutorial: prisma.Tutorial;
  User: prisma.User;
  UserTutorial: prisma.UserTutorial;
  UserTutorialPayload: { // root type
    code?: string | null; // String
    message?: string | null; // String
    success: boolean; // Boolean!
    userTutorial?: NexusGenRootTypes['UserTutorial'] | null; // UserTutorial
  }
  Viewer: { // root type
    id: string; // ID!
  }
  PayloadInterface: NexusGenRootTypes['AuthenticateUserPayload'] | NexusGenRootTypes['UserTutorialPayload'];
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  TutorialWhereInput: NexusGenInputs['TutorialWhereInput'];
  UserTutorialWhereInput: NexusGenInputs['UserTutorialWhereInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserTutorialOrderByInput: NexusGenEnums['UserTutorialOrderByInput'];
}

export interface NexusGenFieldTypes {
  AuthenticateUserPayload: { // field return type
    code: string | null; // String
    message: string | null; // String
    success: boolean; // Boolean!
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Mutation: { // field return type
    authenticate: NexusGenRootTypes['AuthenticateUserPayload'] | null; // AuthenticateUserPayload
    bookmarkTutorial: NexusGenRootTypes['UserTutorialPayload']; // UserTutorialPayload!
    upsertTutorial: NexusGenRootTypes['Tutorial']; // Tutorial!
    upvoteTutorial: NexusGenRootTypes['UserTutorialPayload']; // UserTutorialPayload!
  }
  Query: { // field return type
    tutorial: NexusGenRootTypes['Tutorial']; // Tutorial!
    tutorials: NexusGenRootTypes['Tutorial'][] | null; // [Tutorial!]
    viewer: NexusGenRootTypes['Viewer'] | null; // Viewer
  }
  Tutorial: { // field return type
    createdAt: any; // DateTime!
    gatsbyID: string; // String!
    id: string; // ID!
    name: string; // String!
    numberofChapters: number; // Int!
    numberofStudents: number; // Int!
    numberOfStudents: number; // Int!
    updatedAt: any; // DateTime!
    upvotes: number; // Int!
    userTutorials: NexusGenRootTypes['UserTutorial'][] | null; // [UserTutorial!]
    viewerUserTutorial: NexusGenRootTypes['UserTutorial']; // UserTutorial!
  }
  User: { // field return type
    avatarUrl: string | null; // String
    bio: string | null; // String
    contributor: boolean | null; // Boolean
    createdAt: any; // DateTime!
    email: string | null; // String
    expertise: string | null; // String
    githubHandle: string; // String!
    githubUserId: string; // String!
    id: string; // ID!
    name: string; // String!
    updatedAt: any; // DateTime!
    userTutorials: NexusGenRootTypes['UserTutorial'][] | null; // [UserTutorial!]
  }
  UserTutorial: { // field return type
    bookmarked: boolean | null; // Boolean
    createdAt: any; // DateTime!
    currentChapter: number | null; // Int
    id: string; // ID!
    tutorial: NexusGenRootTypes['Tutorial'] | null; // Tutorial
    updatedAt: any; // DateTime!
    upvoted: boolean | null; // Boolean
    user: NexusGenRootTypes['User'] | null; // User
  }
  UserTutorialPayload: { // field return type
    code: string | null; // String
    message: string | null; // String
    success: boolean; // Boolean!
    userTutorial: NexusGenRootTypes['UserTutorial'] | null; // UserTutorial
  }
  Viewer: { // field return type
    id: string; // ID!
    user: NexusGenRootTypes['User']; // User!
  }
  PayloadInterface: { // field return type
    code: string | null; // String
    message: string | null; // String
    success: boolean; // Boolean!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    authenticate: { // args
      githubCode: string; // String!
    }
    bookmarkTutorial: { // args
      tutorialId: string; // ID!
    }
    upsertTutorial: { // args
      gatsbyID: string; // ID!
      name: string; // String!
      numberofChapters: number; // Int!
    }
    upvoteTutorial: { // args
      tutorialId: string; // ID!
    }
  }
  Query: {
    tutorial: { // args
      id: string; // ID!
    }
    tutorials: { // args
      first: number; // Int!
    }
  }
  Tutorial: {
    userTutorials: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserTutorialOrderByInput'] | null; // UserTutorialOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserTutorialWhereInput'] | null; // UserTutorialWhereInput
    }
  }
  User: {
    userTutorials: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserTutorialOrderByInput'] | null; // UserTutorialOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserTutorialWhereInput'] | null; // UserTutorialWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  PayloadInterface: "AuthenticateUserPayload" | "UserTutorialPayload"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthenticateUserPayload" | "Mutation" | "Query" | "Tutorial" | "User" | "UserTutorial" | "UserTutorialPayload" | "Viewer";

export type NexusGenInputNames = "TutorialWhereInput" | "UserTutorialWhereInput" | "UserWhereInput";

export type NexusGenEnumNames = "UserTutorialOrderByInput";

export type NexusGenInterfaceNames = "PayloadInterface";

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}