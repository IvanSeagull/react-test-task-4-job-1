CREATE TABLE IF NOT EXISTS public.items
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    date timestamp without time zone NOT NULL,
    name character varying COLLATE pg_catalog."default",
    amount integer NOT NULL,
    distance double precision NOT NULL,
    CONSTRAINT items_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.items
    OWNER to root;