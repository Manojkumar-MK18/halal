import { ReactElement } from 'react'
import { Table } from 'react-bootstrap'
import {
  Button,
  ContainerWrapper,
  DropdownWrapper,
  FlexWrapper,
  Input,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../components'
import strings from '../../../locale/en'
import { addTestNameHeader } from './const'

const AddTestName = (): ReactElement => {
  const {
    testSetup: {
      addTestName: { title, testDescription, testName }
    },
    button: { submit }
  } = strings

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={title} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <Input
              value={''}
              placeholder={testName}
              label={testName}
              isRequired
              onChange={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={''}
              placeholder={testDescription}
              label={testDescription}
              onChange={() => {}}
            />
          </DropdownWrapper>
          <Button>{submit}</Button>
        </FlexWrapper>
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableRow>
                {addTestNameHeader?.map((header, index) => (
                  <th key={`complete-session-header-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow></TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AddTestName
