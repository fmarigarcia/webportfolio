import { GraphQLClient } from 'graphql-request';

interface IRequestProps {
  query: string;
  variables: any;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}
const request = ({ query, variables, includeDrafts = false, excludeInvalid = false }: IRequestProps): any => {
  const token = process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_TOKEN;
  if (token === undefined) return;
  const headers: Record<string, string> = {
    authorization: `Bearer ${token}`
  };
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true';
  }
  const client = new GraphQLClient('https://graphql.datocms.com', { headers });
  return client.request(query, variables);
};

export default request;
