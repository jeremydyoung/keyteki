-- Table: public."StandaloneDecks"

-- DROP TABLE public."StandaloneDecks";

CREATE TABLE public."StandaloneDecks"
(
    "Id" integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "Identity" text COLLATE pg_catalog."default",
    "Name" text COLLATE pg_catalog."default",
    "LastUpdated" timestamp without time zone NOT NULL,
    "ExpansionId" integer NOT NULL,
    CONSTRAINT "PK_StandaloneDecks" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_StandaloneDecks_Expansions_ExpansionId" FOREIGN KEY ("ExpansionId")
        REFERENCES public."Expansions" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE public."StandaloneDecks"
    OWNER to keyteki;
-- Index: IX_StandaloneDecks_ExpansionId

-- DROP INDEX public."IX_StandaloneDecks_ExpansionId";

CREATE INDEX "IX_StandaloneDecks_ExpansionId"
    ON public."StandaloneDecks" USING btree
    ("ExpansionId" ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: IX_StandaloneDecks_Identity

-- DROP INDEX public."IX_StandaloneDecks_Identity";

CREATE UNIQUE INDEX "IX_StandaloneDecks_Identity"
    ON public."StandaloneDecks" USING btree
    ("Identity" COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: IX_StandaloneDecks_Name

-- DROP INDEX public."IX_StandaloneDecks_Name";

CREATE UNIQUE INDEX "IX_StandaloneDecks_Name"
    ON public."StandaloneDecks" USING btree
    ("Name" COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;