CREATE TABLE IF NOT EXISTS "pdpr_tps_administrasi" (
	"_id" text PRIMARY KEY NOT NULL,
	"tps" text NOT NULL,
	"images" text[],
	"suara_sah" integer,
	"suara_total" integer,
	"pemilih_dpt_j" integer,
	"pemilih_dpt_l" integer,
	"pemilih_dpt_p" integer,
	"pengguna_dpt_j" integer,
	"pengguna_dpt_l" integer,
	"pengguna_dpt_p" integer,
	"pengguna_dptb_j" integer,
	"pengguna_dptb_l" integer,
	"pengguna_dptb_p" integer,
	"suara_tidak_sah" integer,
	"pengguna_total_j" integer,
	"pengguna_total_l" integer,
	"pengguna_total_p" integer,
	"pengguna_non_dpt_j" integer,
	"pengguna_non_dpt_l" integer,
	"pengguna_non_dpt_p" integer,
	"ts" text NOT NULL,
	"psu" text,
	"fetch_count" integer DEFAULT 0,
	"updated_at" timestamp DEFAULT now(),
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "pdpr_tps_administrasi_tps_unique" UNIQUE("tps")
);
