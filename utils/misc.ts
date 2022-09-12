export const decorateTableProps = (data: any) => {
  if (!data) {
    return {
      data: [],
      pagination: {
        pageSize: 2,
        totalItems: 0,
        totalPages: 0,
        currentPage: 1,
      },
    }
  }

  if (Array.isArray(data)) {
    return {
      data: data,
      pagination: {
        pageSize: 10,
        totalItems: data.length,
        totalPages: data.length / 10,
        currentPage: 1,
      },
    }
  }

  return {
    data: data.data,
    pagination: {
      pageSize: data.countPerPage,
      totalItems: data.totalCount,
      totalPages: data.totalPages,
      currentPage: data.currentPage,
    },
  }
}
