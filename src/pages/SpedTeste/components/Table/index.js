import React from 'react'
import moment from 'moment'
import DataTable from '~/components/DataTable'
import { Delete as DeleteIcon } from '@material-ui/icons'
import { ButtonBox } from 'mio-library-ui'
import { IconButton } from '@material-ui/core'

const options = {
  filterType: 'textField',
  selectableRows: false,
  elevation: 0,
  responsive: 'vertical',
  tableBodyMaxHeight: '500px',
  print: false,
  download: false,
  filter: false,
  search: false,
  viewColumns: false,
  pagination: false,
  textAlign: 'right',
}

const Table = (props) => {
  const { data, isLoading, onItemClick } = props

  const columns = [
      { 
        'name': SpedTeste,
        'label': Teste, 
      },
      { 
        'name': SpedTeste2,
        'label': Teste2, 
      },
  ]

  return (
    <DataTable
      data={data}
      columns={columns}
      options={options}
      isLoading={isLoading}
    ></DataTable>
  )
}

export default Table
