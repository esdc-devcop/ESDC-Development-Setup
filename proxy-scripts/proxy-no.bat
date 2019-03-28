::Automatically remove Git/NPM/system account proxy settings

::Git proxy settings
git config --global --remove-section http
git config --global --remove-section https
git config --global --remove-section url."https://github.com/"
git config --global --remove-section url."https://"

::NPM proxy settings
call npm config rm proxy
call npm config rm https-proxy

::System account proxy environment variables
setx HTTP_PROXY ""
setx HTTPS_PROXY ""