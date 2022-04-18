<template>
  <footer>
    <div id="footer" class="pt-5 pb-3">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3 mb-4">
            <h5 class="mb-3">
              {{ $t('components.footer.connect_with_us') }}
            </h5>
            <a
              href="https://instagram.com/less.borders"
              target="_blank"
              class="btn btn-circle btn-light mb-2 me-2"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/less_borders"
              target="_blank"
              class="btn btn-circle btn-light mb-2 me-2"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com/lessborders"
              target="_blank"
              class="btn btn-circle btn-light mb-2 me-2"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
          <div class="col-sm-6 col-lg-3 mb-4"></div>
          <div class="col-sm-6 col-lg-3 mb-4">
            <h6 class="footer-header">Support</h6>
            <ul class="list-style-none">
              <li>
                <NuxtLink to="/contact">
                  {{ $t('pages.contact.nav') }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-sm-6 col-lg-3 mb-4">
            <h6 class="footer-header">Legal</h6>
            <ul class="list-style-none">
              <li>
                <NuxtLink :to="{ name: 'legal' }">
                  {{ $t('pages.legal.nav') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{ name: 'legal-terms' }">
                  {{ $t('pages.legal.terms.nav') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{ name: 'legal-privacy' }">
                  {{ $t('pages.legal.privacy.nav') }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="copyright">
      <div class="container pt-3 pb-4">
        <div class="row">
          <div class="col-12 text-center">
            <small>
              &copy; Less Borders {{ new Date().getFullYear() }} - Work smarter
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { IApp } from '~/utils/app'
const app = useState<IApp>('app')
</script>
