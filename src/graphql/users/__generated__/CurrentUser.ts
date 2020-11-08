/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrganizationTypes } from './../../../../__generated__/globalTypes'

// ====================================================
// GraphQL query operation: CurrentUser
// ====================================================

export interface CurrentUser_me_roles {
  __typename: 'Role'
  id: string
  name: string | null
}

export interface CurrentUser_me_currentlySelectedOrganization {
  __typename: 'Organization'
  id: string
  name: string | null
  type: OrganizationTypes | null
}

export interface CurrentUser_me_apiCredential {
  __typename: 'ApiCredential'
  secret: string | null
}

export interface CurrentUser_me {
  __typename: 'User'
  id: string
  /**
   * Email of the user
   */
  email: string
  timeZone: string
  unitSelector: string
  /**
   * Roles assigned to the user
   */
  roles: CurrentUser_me_roles[] | null
  currentlySelectedOrganization: CurrentUser_me_currentlySelectedOrganization | null
  apiCredential: CurrentUser_me_apiCredential | null
}

export interface CurrentUser {
  me: CurrentUser_me
  /**
   * Feature flags
   */
  featureFlags: any
}
