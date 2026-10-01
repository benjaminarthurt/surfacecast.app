# surfacecast.app

The published SurfaceCast website. **Every file here is generated - do not edit
anything in this repository by hand, because the next publish will overwrite
it.**

It is built from the SurfaceCast source repository, where the generator and the
documentation live together on purpose: the guide on this site and the guide
inside the application are the same file, so they cannot drift apart.

In a checkout of that repository (https://github.com/benjaminarthurt/SurfaceCast, which is private):

    pip install -r requirements-site.txt
    python tools/capture_screens.py      # refresh the screenshots
    python tools/publish_site.py --repo ../surfacecast.app

Then commit and push in this repository. `docs/WEBSITE.md` there has the whole
procedure, including the GitHub Pages and DNS setup.

The content is part of SurfaceCast and carries its licence; see
[license.html](license.html).
