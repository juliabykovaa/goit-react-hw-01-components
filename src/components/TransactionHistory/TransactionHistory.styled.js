import styled from '@emotion/styled'

export const TransactionTable = styled.table`
color: rgb(117,119,120);
font-size: 24px;
width: fit-content;
margin: 0 auto;
align-items: center;
margin-top: 100px;
padding: 0;
border-collapse: collapse;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
 td, th {
    border-collapse: collapse;
    border: 2px solid rgb(197,207,209);
    padding: 15px;
    text-align: center;
    width: 200px;
}
tr:nth-of-type(even) {
  background-color: rgb(238,247,250);
}

`

export const TableHead = styled.thead`
background-color: rgb(70,130,180);
color: #fff;
`