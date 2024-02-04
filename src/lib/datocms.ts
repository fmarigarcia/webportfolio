import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/esm/types';

interface IRequestProps {
  query: string;
  variables: any;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}

const token = process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_TOKEN;
const headers: GraphQLClientRequestHeaders = {
  authorization: `Bearer ${token as string}`
};

const client = new GraphQLClient('https://graphql.datocms.com', { headers });

const request = ({ query, variables }: IRequestProps): any => {
  return client.request(query, variables);
};

export default request;
