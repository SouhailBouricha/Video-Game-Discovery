import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

function SkeletonCard() {
  return (
    <Card borderRadius={10} overflow={"hidden"} width={"300px"}>
        <Skeleton height="200px" />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default SkeletonCard