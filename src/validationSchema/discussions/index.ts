import * as yup from 'yup';

export const discussionValidationSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
  user_id: yup.string().nullable().required(),
  forum_id: yup.string().nullable().required(),
});
