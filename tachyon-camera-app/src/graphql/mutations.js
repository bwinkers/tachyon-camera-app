/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
      id
      name
      description
      location
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      photos {
        items {
          id
          albumId
          bucket
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
      id
      name
      description
      location
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      photos {
        items {
          id
          albumId
          bucket
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
      id
      name
      description
      location
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      photos {
        items {
          id
          albumId
          bucket
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
      id
      albumId
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      album {
        id
        name
        description
        location
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        photos {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
      id
      albumId
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      album {
        id
        name
        description
        location
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        photos {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
      id
      albumId
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      album {
        id
        name
        description
        location
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        photos {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
