// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Organizations, Todo } = initSchema(schema);

export {
  Organizations,
  Todo
};