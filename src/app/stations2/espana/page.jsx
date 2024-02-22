'use client'

import React, { useState } from 'react'
import { BsArrowUp, BsArrowDown, BsSearch } from "react-icons/bs";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'
import { STATION_DB } from '@/app/api/data/data'
import Link from 'next/link';

const data = STATION_DB

const EspanaStation = () => {

  const columns = [
    {
      header: "Estación",
      accessorKey: "station",
      className: 'max-sm:w-1/4'
    },
    {
      header: "Forfait",
      accessorKey: "price"
    },
    {
      header: "Nieve",
      accessorKey: "snow"
    },
    {
      header: "Kilometros",
      accessorKey: "kilometers"
    },
    {
      header: "Estado",
      accessorKey: "state"
    }
  ]

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState('')

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting, globalFilter: filtering },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering
  });

  return (

    <div className='mt-10 lg:w-[1280px] md:w-[700px] max-sm:w-full flex-col gap-2 flex'>
      <div className='flex gap-2'>
        <label htmlFor="filter"><BsSearch className='size-8' /></label>
        <input
          type="text"
          value={filtering}
          name='filter'
          id='filter'
          onChange={(e) => setFiltering(e.target.value)}
          className='border border-black rounded-md px-2'
        />
      </div>
      <table className='w-full border-collapse border-spacing-0 '>
        <thead className='bg-blue-300'>
          {
            table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {
                  headerGroup.headers.map(header => (
                    <th key={header.id} className='text-left p-4 max-sm:text-[10px] max-sm:p-1 select-none cursor-pointer'
                      onClick={header.column.getToggleSortingHandler()}>
                      {
                        flexRender(header.column.columnDef.header, header.getContext())
                      }
                      {
                        { 'asc': "⬆️", 'desc': "⬇️" }[header.column.getIsSorted() ?? null]
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody>
          {
            table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td className='text-left border-b p-4 max-sm:text-[10px] max-sm:p-1 max-sm:w-1/8'>
                    <Link href={`stations2/espana/${cell.row.original.id}`}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Link>
                  </td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default EspanaStation