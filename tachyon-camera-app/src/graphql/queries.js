/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
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
export const syncAlbums = /* GraphQL */ `
  query SyncAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAlbums(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
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
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const listPhotosByAlbum = /* GraphQL */ `
  query ListPhotosByAlbum(
    $albumId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotosByAlbum(
      albumId: $albumId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPhotos = /* GraphQL */ `
  query SyncPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPhotos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
