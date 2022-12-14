CREATE TABLE users_widgets (
	id serial NOT NULL PRIMARY KEY,
	user_id bigint NOT NULL,
	widget_id bigint NOT NULL
) WITH (
  OIDS=FALSE
);
