import {
  boolean,
  index,
  integer,
  json,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const pdprTps = pgTable("pdpr_tps", {
  kode: text("kode").primaryKey(),
  provinsi_kode: text("provinsi_kode").notNull(),
  provinsi_nama: text("provinsi_nama"),
  kabupaten_kota_kode: text("kabupaten_kota_kode").notNull(),
  kabupaten_kota_nama: text("kabupaten_kota_nama"),
  kecamatan_kode: text("kecamatan_kode").notNull(),
  kecamatan_nama: text("kecamatan_nama"),
  kelurahan_desa_kode: text("kelurahan_desa_kode").notNull(),
  kelurahan_desa_nama: text("kelurahan_desa_nama"),
  tps: text("tps").notNull(),

  suara_partai_1: integer("suara_partai_1"),
  suara_partai_2: integer("suara_partai_2"),
  suara_partai_3: integer("suara_partai_3"),
  suara_partai_4: integer("suara_partai_4"),
  suara_partai_5: integer("suara_partai_5"),
  suara_partai_6: integer("suara_partai_6"),
  suara_partai_7: integer("suara_partai_7"),
  suara_partai_8: integer("suara_partai_8"),
  suara_partai_9: integer("suara_partai_9"),
  suara_partai_10: integer("suara_partai_10"),
  suara_partai_11: integer("suara_partai_11"),
  suara_partai_12: integer("suara_partai_12"),
  suara_partai_13: integer("suara_partai_13"),
  suara_partai_14: integer("suara_partai_14"),
  suara_partai_15: integer("suara_partai_15"),
  suara_partai_16: integer("suara_partai_16"),
  suara_partai_17: integer("suara_partai_17"),
  suara_partai_18: integer("suara_partai_18"),
  suara_partai_19: integer("suara_partai_19"),
  suara_partai_20: integer("suara_partai_20"),
  suara_partai_21: integer("suara_partai_21"),
  suara_partai_22: integer("suara_partai_22"),
  suara_partai_23: integer("suara_partai_23"),
  suara_partai_24: integer("suara_partai_24"),

  images: text("images").array(),

  suara_sah: integer("suara_sah"),
  suara_total: integer("suara_total"),
  pemilih_dpt_j: integer("pemilih_dpt_j"),
  pemilih_dpt_l: integer("pemilih_dpt_l"),
  pemilih_dpt_p: integer("pemilih_dpt_p"),
  pengguna_dpt_j: integer("pengguna_dpt_j"),
  pengguna_dpt_l: integer("pengguna_dpt_l"),
  pengguna_dpt_p: integer("pengguna_dpt_p"),
  pengguna_dptb_j: integer("pengguna_dptb_j"),
  pengguna_dptb_l: integer("pengguna_dptb_l"),
  pengguna_dptb_p: integer("pengguna_dptb_p"),
  suara_tidak_sah: integer("suara_tidak_sah"),
  pengguna_total_j: integer("pengguna_total_j"),
  pengguna_total_l: integer("pengguna_total_l"),
  pengguna_total_p: integer("pengguna_total_p"),
  pengguna_non_dpt_j: integer("pengguna_non_dpt_j"),
  pengguna_non_dpt_l: integer("pengguna_non_dpt_l"),
  pengguna_non_dpt_p: integer("pengguna_non_dpt_p"),
  psu: text("psu"),
  ts: text("ts"),
  status_suara: boolean("status_suara"),
  status_adm: boolean("status_adm"),

  url_page: text("url_page"),
  url_api: text("url_api"),
  updated_at: timestamp("updated_at").defaultNow(),
  created_at: timestamp("created_at").defaultNow(),
  fetch_count: integer("fetch_count").default(0),
});

export const pdprDapilList = pgTable("pdpr_dapil_list", {
  id: integer("id").primaryKey(),
  nama: text("nama").notNull(),
  kode: text("kode").notNull(),
  updated_at: timestamp("updated_at").defaultNow(),
  created_at: timestamp("created_at").defaultNow(),

  fetch_count: integer("fetch_count").default(0),
  is_calon_fetched: boolean("is_calon_fetched").default(false),
});

export const pdprDapilCalonList = pgTable("pdpr_dapil_calon_list", {
  nama: text("nama").notNull(),
  jenis_kelamin: text("jenis_kelamin").notNull(),
  tempat_tinggal: text("tempat_tinggal").notNull(),
  calon_id: text("calon_id").primaryKey(),
  partai_id: text("partai_id").notNull(),
  nomor_urut_calon_di_partai: integer("nomor_urut_calon_di_partai").notNull(),

  jumlah_suara: integer("jumlah_suara"),

  dapil_kode: text("dapil_kode").notNull(),

  updated_at: timestamp("updated_at").defaultNow(),
  created_at: timestamp("created_at").defaultNow(),
});
