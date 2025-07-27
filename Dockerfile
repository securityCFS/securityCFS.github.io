FROM jekyll/jekyll:latest

WORKDIR /srv/jekyll

COPY Gemfile* ./
RUN bundle install

COPY . .

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--drafts", "--watch", "--force_polling"]
