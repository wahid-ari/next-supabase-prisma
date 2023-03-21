-- CreateTable
CREATE TABLE "admin" (
    "id" BIGSERIAL NOT NULL,
    "username" VARCHAR,
    "password" VARCHAR,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR,
    "type" VARCHAR,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "album" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR,
    "cover" VARCHAR,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "artists_id" BIGINT,

    CONSTRAINT "album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artists" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR NOT NULL,
    "cover_url" VARCHAR,
    "genre_id" BIGINT,

    CONSTRAINT "artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genre" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playlist" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playlist_song" (
    "id" BIGSERIAL NOT NULL,
    "playlist_id" BIGINT,
    "song_id" BIGINT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "playlist_song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playlist_user" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT,
    "name" VARCHAR,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "playlist_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playlist_user_song" (
    "id" BIGSERIAL NOT NULL,
    "playlist_user_id" BIGINT,
    "song_id" BIGINT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "playlist_user_song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "songs" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "youtube_url" VARCHAR,
    "cover_url" VARCHAR,
    "artist_id" BIGINT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "album_id" BIGINT,
    "preview_url" VARCHAR,

    CONSTRAINT "songs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "album" ADD CONSTRAINT "album_artists_id_fkey" FOREIGN KEY ("artists_id") REFERENCES "artists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "artists" ADD CONSTRAINT "artists_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genre"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "playlist_song" ADD CONSTRAINT "playlist_song_playlist_id_fkey" FOREIGN KEY ("playlist_id") REFERENCES "playlist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "playlist_song" ADD CONSTRAINT "playlist_song_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "songs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "playlist_user" ADD CONSTRAINT "playlist_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "admin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "playlist_user_song" ADD CONSTRAINT "playlist_user_song_playlist_user_id_fkey" FOREIGN KEY ("playlist_user_id") REFERENCES "playlist_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "playlist_user_song" ADD CONSTRAINT "playlist_user_song_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "songs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "songs" ADD CONSTRAINT "songs_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "album"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "songs" ADD CONSTRAINT "songs_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "artists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
