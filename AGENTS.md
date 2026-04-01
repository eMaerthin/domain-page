# d0g.ai Dev Notes

## GitHub Pages deployment practice
- Keep repository content **consistent** between `index.html` and `assets/*`.
- Avoid leaving **stale hashed bundles** in `assets/` after rebuilds.
- Prefer a single reliable output flow:
  - Build once (`npm run build`)
  - Deploy only the resulting files (either via a CI/CD pipeline or by copying artifacts in a fully consistent way).

## When debugging asset path issues
- Verify what the live site is actually loading:
  - `View source` for `assets/index-*.js` and `assets/*.css`
  - Browser DevTools Network for 200/404 on those asset URLs
- Confirm the Pages-served files correspond to the latest local build artifacts.
