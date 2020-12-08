/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($owner: String) {
    onCreateAlbum(owner: $owner) {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($owner: String) {
    onUpdateAlbum(owner: $owner) {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($owner: String) {
    onDeleteAlbum(owner: $owner) {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto($owner: String) {
    onCreatePhoto(owner: $owner) {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto($owner: String) {
    onUpdatePhoto(owner: $owner) {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto($owner: String) {
    onDeletePhoto(owner: $owner) {
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
