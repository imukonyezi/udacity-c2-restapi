export const config = {
  dev: {
    username: process.env.UG_POSTGRESS_USERNAME,
    password: process.env.UG_POSTGRESS_PASSWORD,
    database: process.env.UG_POSTGRESS_DATABASE,
    host: process.env.UG_POSTGRESS_HOST,
    dialect: 'postgres',
    aws: {
      aws_reigion: process.env.UG_AWS_REGION,
      aws_profile: process.env.UG_AWS_PROFILE,
      aws_media_bucket: process.env.UG_AWS_MEDIA_BUCKET
    }
  },
  prod: {
    username: process.env.POSTGRESS_USERNAME,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_DATABASE,
    host: process.env.POSTGRESS_HOST,
    dialect: 'postgres',
    aws: {
      aws_reigion: process.env.AWS_REGION,
      aws_profile: process.env.AWS_PROFILE,
      aws_media_bucket: process.env.AWS_MEDIA_BUCKET
    }
  },
  url_expires: 60 * 5
};
