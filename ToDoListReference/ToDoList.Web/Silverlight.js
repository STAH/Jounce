//v2.0.30511.0
if(!window.Silverlight)window.Silverlight={};Silverlight._silverlightCount=0;Silverlight.__onSilverlightInstalledCalled=false;Silverlight.fwlinkRoot="http://go2.microsoft.com/fwlink/?LinkID=";Silverlight.__installationEventFired=false;Silverlight.onGetSilverlight=null;Silverlight.onSilverlightInstalled=function(){window.location.reload(false)};Silverlight.isInstalled=function(b){if(b==undefined)b=null;var a=false,m=null;try{var i=null,j=false;if(window.ActiveXObject)try{i=new ActiveXObject("AgControl.AgControl");if(b===null)a=true;else if(i.IsVersionSupported(b))a=true;i=null}catch(l){j=true}else j=true;if(j){var k=navigator.plugins["Silverlight Plug-In"];if(k)if(b===null)a=true;else{var h=k.description;if(h==="1.0.30226.2")h="2.0.30226.2";var c=h.split(".");while(c.length>3)c.pop();while(c.length<4)c.push(0);var e=b.split(".");while(e.length>4)e.pop();var d,g,f=0;do{d=parseInt(e[f]);g=parseInt(c[f]);f++}while(f<e.length&&d===g);if(d<=g&&!isNaN(d))a=true}}}catch(l){a=false}return a};Silverlight.WaitForInstallCompletion=function(){if(!Silverlight.isBrowserRestartRequired&&Silverlight.onSilverlightInstalled){try{navigator.plugins.refresh()}catch(a){}if(Silverlight.isInstalled(null)&&!Silverlight.__onSilverlightInstalledCalled){Silverlight.onSilverlightInstalled();Silverlight.__onSilverlightInstalledCalled=true}else setTimeout(Silverlight.WaitForInstallCompletion,3e3)}};Silverlight.__startup=function(){navigator.plugins.refresh();Silverlight.isBrowserRestartRequired=Silverlight.isInstalled(null);if(!Silverlight.isBrowserRestartRequired){Silverlight.WaitForInstallCompletion();if(!Silverlight.__installationEventFired){Silverlight.onInstallRequired();Silverlight.__installationEventFired=true}}else if(window.navigator.mimeTypes){var b=navigator.mimeTypes["application/x-silverlight-2"],c=navigator.mimeTypes["application/x-silverlight-2-b2"],d=navigator.mimeTypes["application/x-silverlight-2-b1"],a=d;if(c)a=c;if(!b&&(d||c)){if(!Silverlight.__installationEventFired){Silverlight.onUpgradeRequired();Silverlight.__installationEventFired=true}}else if(b&&a)if(b.enabledPlugin&&a.enabledPlugin)if(b.enabledPlugin.description!=a.enabledPlugin.description)if(!Silverlight.__installationEventFired){Silverlight.onRestartRequired();Silverlight.__installationEventFired=true}}if(!Silverlight.disableAutoStartup)if(window.removeEventListener)window.removeEventListener("load",Silverlight.__startup,false);else window.detachEvent("onload",Silverlight.__startup)};if(!Silverlight.disableAutoStartup)if(window.addEventListener)window.addEventListener("load",Silverlight.__startup,false);else window.attachEvent("onload",Silverlight.__startup);Silverlight.createObject=function(m,f,e,k,l,h,j){var d={},a=k,c=l;d.version=a.version;a.source=m;d.alt=a.alt;if(h)a.initParams=h;if(a.isWindowless&&!a.windowless)a.windowless=a.isWindowless;if(a.framerate&&!a.maxFramerate)a.maxFramerate=a.framerate;if(e&&!a.id)a.id=e;delete a.ignoreBrowserVer;delete a.inplaceInstallPrompt;delete a.version;delete a.isWindowless;delete a.framerate;delete a.data;delete a.src;delete a.alt;if(Silverlight.isInstalled(d.version)){for(var b in c)if(c[b]){if(b=="onLoad"&&typeof c[b]=="function"&&c[b].length!=1){var i=c[b];c[b]=function(a){return i(document.getElementById(e),j,a)}}var g=Silverlight.__getHandlerName(c[b]);if(g!=null){a[b]=g;c[b]=null}else throw"typeof events."+b+" must be 'function' or 'string'";}slPluginHTML=Silverlight.buildHTML(a)}else slPluginHTML=Silverlight.buildPromptHTML(d);if(f)f.innerHTML=slPluginHTML;else return slPluginHTML};Silverlight.buildHTML=function(a){var b=[];b.push('<object type="application/x-silverlight" data="data:application/x-silverlight,"');if(a.id!=null)b.push(' id="'+Silverlight.HtmlAttributeEncode(a.id)+'"');if(a.width!=null)b.push(' width="'+a.width+'"');if(a.height!=null)b.push(' height="'+a.height+'"');b.push(" >");delete a.id;delete a.width;delete a.height;for(var c in a)if(a[c])b.push('<param name="'+Silverlight.HtmlAttributeEncode(c)+'" value="'+Silverlight.HtmlAttributeEncode(a[c])+'" />');b.push("</object>");return b.join("")};Silverlight.createObjectEx=function(b){var a=b,c=Silverlight.createObject(a.source,a.parentElement,a.id,a.properties,a.events,a.initParams,a.context);if(a.parentElement==null)return c};Silverlight.buildPromptHTML=function(b){var a="",d=Silverlight.fwlinkRoot,c=b.version;if(b.alt)a=b.alt;else{if(!c)c="";a="<a href='javascript:Silverlight.getSilverlight(\"{1}\");' style='text-decoration: none;'><img src='{2}' alt='Get Microsoft Silverlight' style='border-style: none'/></a>";a=a.replace("{1}",c);a=a.replace("{2}",d+"108181")}return a};Silverlight.getSilverlight=function(e){if(Silverlight.onGetSilverlight)Silverlight.onGetSilverlight();var b="",a=String(e).split(".");if(a.length>1){var c=parseInt(a[0]);if(isNaN(c)||c<2)b="1.0";else b=a[0]+"."+a[1]}var d="";if(b.match(/^\d+\056\d+$/))d="&v="+b;Silverlight.followFWLink("149156"+d)};Silverlight.followFWLink=function(a){top.location=Silverlight.fwlinkRoot+String(a)};Silverlight.HtmlAttributeEncode=function(c){var a,b="";if(c==null)return null;for(var d=0;d<c.length;d++){a=c.charCodeAt(d);if(a>96&&a<123||a>64&&a<91||a>43&&a<58&&a!=47||a==95)b=b+String.fromCharCode(a);else b=b+"&#"+a+";"}return b};Silverlight.default_error_handler=function(e,b){var d,c=b.ErrorType;d=b.ErrorCode;var a="\nSilverlight error message     \n";a+="ErrorCode: "+d+"\n";a+="ErrorType: "+c+"       \n";a+="Message: "+b.ErrorMessage+"     \n";if(c=="ParserError"){a+="XamlFile: "+b.xamlFile+"     \n";a+="Line: "+b.lineNumber+"     \n";a+="Position: "+b.charPosition+"     \n"}else if(c=="RuntimeError"){if(b.lineNumber!=0){a+="Line: "+b.lineNumber+"     \n";a+="Position: "+b.charPosition+"     \n"}a+="MethodName: "+b.methodName+"     \n"}alert(a)};Silverlight.__cleanup=function(){for(var a=Silverlight._silverlightCount-1;a>=0;a--)window["__slEvent"+a]=null;Silverlight._silverlightCount=0;if(window.removeEventListener)window.removeEventListener("unload",Silverlight.__cleanup,false);else window.detachEvent("onunload",Silverlight.__cleanup)};Silverlight.__getHandlerName=function(b){var a="";if(typeof b=="string")a=b;else if(typeof b=="function"){if(Silverlight._silverlightCount==0)if(window.addEventListener)window.addEventListener("onunload",Silverlight.__cleanup,false);else window.attachEvent("onunload",Silverlight.__cleanup);var c=Silverlight._silverlightCount++;a="__slEvent"+c;window[a]=b}else a=null;return a};Silverlight.onRequiredVersionAvailable=function(){};Silverlight.onRestartRequired=function(){};Silverlight.onUpgradeRequired=function(){};Silverlight.onInstallRequired=function(){};Silverlight.IsVersionAvailableOnError=function(d,a){var b=false;try{if(a.ErrorCode==8001&&!Silverlight.__installationEventFired){Silverlight.onUpgradeRequired();Silverlight.__installationEventFired=true}else if(a.ErrorCode==8002&&!Silverlight.__installationEventFired){Silverlight.onRestartRequired();Silverlight.__installationEventFired=true}else if(a.ErrorCode==5014||a.ErrorCode==2106){if(Silverlight.__verifySilverlight2UpgradeSuccess(a.getHost()))b=true}else b=true}catch(c){}return b};Silverlight.IsVersionAvailableOnLoad=function(b){var a=false;try{if(Silverlight.__verifySilverlight2UpgradeSuccess(b.getHost()))a=true}catch(c){}return a};Silverlight.__verifySilverlight2UpgradeSuccess=function(d){var c=false,b="2.0.31005",a=null;try{if(d.IsVersionSupported(b+".99")){a=Silverlight.onRequiredVersionAvailable;c=true}else if(d.IsVersionSupported(b+".0"))a=Silverlight.onRestartRequired;else a=Silverlight.onUpgradeRequired;if(a&&!Silverlight.__installationEventFired){a();Silverlight.__installationEventFired=true}}catch(e){}return c}
// SIG // Begin signature block
// SIG // MIIXQgYJKoZIhvcNAQcCoIIXMzCCFy8CAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFLA5nHpATb5W
// SIG // mnWLvj0sWBFDLHkQoIISMTCCBGAwggNMoAMCAQICCi6r
// SIG // EdxQ/1ydy8AwCQYFKw4DAh0FADBwMSswKQYDVQQLEyJD
// SIG // b3B5cmlnaHQgKGMpIDE5OTcgTWljcm9zb2Z0IENvcnAu
// SIG // MR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // ITAfBgNVBAMTGE1pY3Jvc29mdCBSb290IEF1dGhvcml0
// SIG // eTAeFw0wNzA4MjIyMjMxMDJaFw0xMjA4MjUwNzAwMDBa
// SIG // MHkxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xIzAhBgNVBAMTGk1p
// SIG // Y3Jvc29mdCBDb2RlIFNpZ25pbmcgUENBMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt3l91l2zRTmo
// SIG // NKwx2vklNUl3wPsfnsdFce/RRujUjMNrTFJi9JkCw03Y
// SIG // SWwvJD5lv84jtwtIt3913UW9qo8OUMUlK/Kg5w0jH9FB
// SIG // JPpimc8ZRaWTSh+ZzbMvIsNKLXxv2RUeO4w5EDndvSn0
// SIG // ZjstATL//idIprVsAYec+7qyY3+C+VyggYSFjrDyuJSj
// SIG // zzimUIUXJ4dO3TD2AD30xvk9gb6G7Ww5py409rQurwp9
// SIG // YpF4ZpyYcw2Gr/LE8yC5TxKNY8ss2TJFGe67SpY7UFMY
// SIG // zmZReaqth8hWPp+CUIhuBbE1wXskvVJmPZlOzCt+M26E
// SIG // RwbRntBKhgJuhgCkwIffUwIDAQABo4H6MIH3MBMGA1Ud
// SIG // JQQMMAoGCCsGAQUFBwMDMIGiBgNVHQEEgZowgZeAEFvQ
// SIG // cO9pcp4jUX4Usk2O/8uhcjBwMSswKQYDVQQLEyJDb3B5
// SIG // cmlnaHQgKGMpIDE5OTcgTWljcm9zb2Z0IENvcnAuMR4w
// SIG // HAYDVQQLExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xITAf
// SIG // BgNVBAMTGE1pY3Jvc29mdCBSb290IEF1dGhvcml0eYIP
// SIG // AMEAizw8iBHRPvZj7N9AMA8GA1UdEwEB/wQFMAMBAf8w
// SIG // HQYDVR0OBBYEFMwdznYAcFuv8drETppRRC6jRGPwMAsG
// SIG // A1UdDwQEAwIBhjAJBgUrDgMCHQUAA4IBAQB7q65+Siby
// SIG // zrxOdKJYJ3QqdbOG/atMlHgATenK6xjcacUOonzzAkPG
// SIG // yofM+FPMwp+9Vm/wY0SpRADulsia1Ry4C58ZDZTX2h6t
// SIG // KX3v7aZzrI/eOY49mGq8OG3SiK8j/d/p1mkJkYi9/uEA
// SIG // uzTz93z5EBIuBesplpNCayhxtziP4AcNyV1ozb2AQWtm
// SIG // qLu3u440yvIDEHx69dLgQt97/uHhrP7239UNs3DWkuNP
// SIG // tjiifC3UPds0C2I3Ap+BaiOJ9lxjj7BauznXYIxVhBoz
// SIG // 9TuYoIIMol+Lsyy3oaXLq9ogtr8wGYUgFA0qvFL0QeBe
// SIG // MOOSKGmHwXDi86erzoBCcnYOMIIEejCCA2KgAwIBAgIK
// SIG // YQGymwAAAAAAFTANBgkqhkiG9w0BAQUFADB5MQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSMwIQYDVQQDExpNaWNyb3NvZnQg
// SIG // Q29kZSBTaWduaW5nIFBDQTAeFw0xMTAyMjEyMDUzMTJa
// SIG // Fw0xMjA1MjEyMDUzMTJaMIGDMQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMQ0wCwYDVQQLEwRNT1BSMR4wHAYDVQQDExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24wggEiMA0GCSqGSIb3DQEB
// SIG // AQUAA4IBDwAwggEKAoIBAQClcXQYy9ucL/rxYxmAo47/
// SIG // yHCDDKFHKvr6WrDOTQ+9O9ohzQXVfXw/tZl2JTrcoE8g
// SIG // 5XLTQ3Hm/2wU+Z+EsiWHvRS1Xb43iS7Fq4VgcYWBJ7kz
// SIG // A/mt1pMC7rZVEQLLg4X2wYVjYRmgFJydn5xGYzfYETxX
// SIG // x0ggUxb3zFj+9sAayrZGbA3oOgXOphzjiPDdqsJwg1vR
// SIG // 8vI/uNmknaMAbqqBze46BK3ASpIsE+DpQXYJgAFsZyC0
// SIG // MbA+a9JACIPVcDCNMOe+jNAv7tSGPxpapcBoheiJfJED
// SIG // Sm5ZQyBInIj+yUW36EwEAQtizqLsHJMl/dCxDsb4tiQa
// SIG // e/t81lxO0WfpAgMBAAGjgfgwgfUwEwYDVR0lBAwwCgYI
// SIG // KwYBBQUHAwMwHQYDVR0OBBYEFNly1MsMYl/do3SfXw6Y
// SIG // QahbE0MmMA4GA1UdDwEB/wQEAwIHgDAfBgNVHSMEGDAW
// SIG // gBTMHc52AHBbr/HaxE6aUUQuo0Rj8DBEBgNVHR8EPTA7
// SIG // MDmgN6A1hjNodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20v
// SIG // cGtpL2NybC9wcm9kdWN0cy9DU1BDQS5jcmwwSAYIKwYB
// SIG // BQUHAQEEPDA6MDgGCCsGAQUFBzAChixodHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL0NTUENBLmNy
// SIG // dDANBgkqhkiG9w0BAQUFAAOCAQEAYGAn2HwwSRJHQTc8
// SIG // XnW05KIANhFIsCxYm5h87aMSoZjuGLOX9m2O2DAaHK0h
// SIG // Y0FGk9evGihLlzZ9QFRgzGK86fxpp19/xYemhgx8qeJZ
// SIG // fduI1Xd4BaYkymT4TlG3RCiOGixUCChyxR8YPSzPACdv
// SIG // E9GlYfLWYjq9AE4FL5lnfeVjQz87DL6LB3rheEC/33jO
// SIG // hyCiGaG8YPCfrFJcdhT9G3gF12N1a4H9h0atrVlSv3u/
// SIG // rxmkkrLyCyx+MBDbMUu+hFp/95sSeOnefmCrDcYxHvZy
// SIG // mj5nzzjuOM45G3PbO9k034PSnM3hi94a/mQIX6/2Lrgy
// SIG // JXZpJfPVjTUjw9slRDCCBJ0wggOFoAMCAQICEGoLmU/A
// SIG // ACWrEdtFH1h6Z6IwDQYJKoZIhvcNAQEFBQAwcDErMCkG
// SIG // A1UECxMiQ29weXJpZ2h0IChjKSAxOTk3IE1pY3Jvc29m
// SIG // dCBDb3JwLjEeMBwGA1UECxMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSEwHwYDVQQDExhNaWNyb3NvZnQgUm9vdCBB
// SIG // dXRob3JpdHkwHhcNMDYwOTE2MDEwNDQ3WhcNMTkwOTE1
// SIG // MDcwMDAwWjB5MQswCQYDVQQGEwJVUzETMBEGA1UECBMK
// SIG // V2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwG
// SIG // A1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSMwIQYD
// SIG // VQQDExpNaWNyb3NvZnQgVGltZXN0YW1waW5nIFBDQTCC
// SIG // ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANw3
// SIG // bvuvyEJKcRjIzkg+U8D6qxS6LDK7Ek9SyIPtPjPZSTGS
// SIG // KLaRZOAfUIS6wkvRfwX473W+i8eo1a5pcGZ4J2botrfv
// SIG // hbnN7qr9EqQLWSIpL89A2VYEG3a1bWRtSlTb3fHev5+D
// SIG // x4Dff0wCN5T1wJ4IVh5oR83ZwHZcL322JQS0VltqHGP/
// SIG // gHw87tUEJU05d3QHXcJc2IY3LHXJDuoeOQl8dv6dbG56
// SIG // 4Ow+j5eecQ5fKk8YYmAyntKDTisiXGhFi94vhBBQsvm1
// SIG // Go1s7iWbE/jLENeFDvSCdnM2xpV6osxgBuwFsIYzt/iU
// SIG // W4RBhFiFlG6wHyxIzG+cQ+Bq6H8mjmsCAwEAAaOCASgw
// SIG // ggEkMBMGA1UdJQQMMAoGCCsGAQUFBwMIMIGiBgNVHQEE
// SIG // gZowgZeAEFvQcO9pcp4jUX4Usk2O/8uhcjBwMSswKQYD
// SIG // VQQLEyJDb3B5cmlnaHQgKGMpIDE5OTcgTWljcm9zb2Z0
// SIG // IENvcnAuMR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xITAfBgNVBAMTGE1pY3Jvc29mdCBSb290IEF1
// SIG // dGhvcml0eYIPAMEAizw8iBHRPvZj7N9AMBAGCSsGAQQB
// SIG // gjcVAQQDAgEAMB0GA1UdDgQWBBRv6E4/l7k0q0uGj7yc
// SIG // 6qw7QUPG0DAZBgkrBgEEAYI3FAIEDB4KAFMAdQBiAEMA
// SIG // QTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAN
// SIG // BgkqhkiG9w0BAQUFAAOCAQEAlE0RMcJ8ULsRjqFhBwEO
// SIG // jHBFje9zVL0/CQUt/7hRU4Uc7TmRt6NWC96Mtjsb0fus
// SIG // p8m3sVEhG28IaX5rA6IiRu1stG18IrhG04TzjQ++B4o2
// SIG // wet+6XBdRZ+S0szO3Y7A4b8qzXzsya4y1Ye5y2PENtEY
// SIG // Ib923juasxtzniGI2LS0ElSM9JzCZUqaKCacYIoPO8cT
// SIG // ZXhIu8+tgzpPsGJY3jDp6Tkd44ny2jmB+RMhjGSAYwYE
// SIG // lvKaAkMve0aIuv8C2WX5St7aA3STswVuDMyd3ChhfEjx
// SIG // F5wRITgCHIesBsWWMrjlQMZTPb2pid7oZjeN9CKWnMyw
// SIG // d1RROtZyRLIj9jCCBKowggOSoAMCAQICCmEGlC0AAAAA
// SIG // AAkwDQYJKoZIhvcNAQEFBQAweTELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEjMCEGA1UEAxMaTWljcm9zb2Z0IFRpbWVzdGFt
// SIG // cGluZyBQQ0EwHhcNMDgwNzI1MTkwMjE3WhcNMTMwNzI1
// SIG // MTkxMjE3WjCBszELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjENMAsG
// SIG // A1UECxMETU9QUjEnMCUGA1UECxMebkNpcGhlciBEU0Ug
// SIG // RVNOOjdBODItNjg4QS05RjkyMSUwIwYDVQQDExxNaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNlMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlYEKIEIYUXrZ
// SIG // le2b/dyH0fsOjxPqqjcoEnb+TVCrdpcqk0fgqVZpAuWU
// SIG // fk2F239x73UA27tDbPtvrHHwK9F8ks6UF52hxbr5937d
// SIG // YeEtMB6cJi12P+ZGlo6u2Ik32Mzv889bw/xo4PJkj5vo
// SIG // wxL5o76E/NaLzgU9vQF2UCcD+IS3FoaNYL5dKSw8z6X9
// SIG // mFo1HU8WwDjYHmE/PTazVhQVd5U7EPoAsJPiXTerJ7tj
// SIG // LEgUgVXjbOqpK5WNiA5+owCldyQHmCpwA7gqJJCa3sWi
// SIG // Iku/TFkGd1RyQ7A+ZN2ThAhYtv7ph0kJNrOz+DOpfkyi
// SIG // eX8yWSkOnrX14DyeP+xGOwIDAQABo4H4MIH1MB0GA1Ud
// SIG // DgQWBBQolYi/Ajvr2pS6fUYP+sv0fp3/0TAfBgNVHSME
// SIG // GDAWgBRv6E4/l7k0q0uGj7yc6qw7QUPG0DBEBgNVHR8E
// SIG // PTA7MDmgN6A1hjNodHRwOi8vY3JsLm1pY3Jvc29mdC5j
// SIG // b20vcGtpL2NybC9wcm9kdWN0cy90c3BjYS5jcmwwSAYI
// SIG // KwYBBQUHAQEEPDA6MDgGCCsGAQUFBzAChixodHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL3RzcGNh
// SIG // LmNydDATBgNVHSUEDDAKBggrBgEFBQcDCDAOBgNVHQ8B
// SIG // Af8EBAMCBsAwDQYJKoZIhvcNAQEFBQADggEBAADurPzi
// SIG // 0ohmyinjWrnNAIJ+F1zFJFkSu6j3a9eH/o3LtXYfGyL2
// SIG // 9+HKtLlBARo3rUg3lnD6zDOnKIy4C7Z0Eyi3s3XhKgni
// SIG // i0/fmD+XtzQSgeoQ3R3cumTPTlA7TIr9Gd0lrtWWh+pL
// SIG // xOXw+UEXXQHrV4h9dnrlb/6HIKyTnIyav18aoBUwJOCi
// SIG // fmGRHSkpw0mQOkODie7e1YPdTyw1O+dBQQGqAAwL8tZJ
// SIG // G85CjXuw8y2NXSnhvo1/kRV2tGD7FCeqbxJjQihYOoo7
// SIG // i0Dkt8XMklccRlZrj8uSTVYFAMr4MEBFTt8ZiL31EPDd
// SIG // Gt8oHrRR8nfgJuO7CYES3B460EUxggR9MIIEeQIBATCB
// SIG // hzB5MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGlu
// SIG // Z3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMV
// SIG // TWljcm9zb2Z0IENvcnBvcmF0aW9uMSMwIQYDVQQDExpN
// SIG // aWNyb3NvZnQgQ29kZSBTaWduaW5nIFBDQQIKYQGymwAA
// SIG // AAAAFTAJBgUrDgMCGgUAoIGoMBkGCSqGSIb3DQEJAzEM
// SIG // BgorBgEEAYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgor
// SIG // BgEEAYI3AgEVMCMGCSqGSIb3DQEJBDEWBBQeJ3e585Q8
// SIG // 0Sxqn2B4eptWjFDJ4TBIBgorBgEEAYI3AgEMMTowOKAe
// SIG // gBwAUwBpAGwAdgBlAHIAbABpAGcAaAB0AC4AagBzoRaA
// SIG // FGh0dHA6Ly9taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAIwcU99n9Iqb73bw3nPB+p7Y+/Q6Fw8rXpjs
// SIG // VdIjeZ7rouIhUYdfBBYSVw6eZq7qTYxpAZOQZZ2ph342
// SIG // dQhHHb1gK3QaRxQ7eG0/JTcN3Dv6aJqpd4wzSH+dE5z+
// SIG // YHMcWg32yMAiDUUHMpbhLAhM97KgS+rGdIoKQ9EShb2M
// SIG // xgTvQKVIJJXMYwzCdpFC+bujXmBGJFZEt052VjDUNMgX
// SIG // /ItLYaYo2srIuO6tbtFBOOZmx/uPQYrcyADHOg7oZLZu
// SIG // NKlMtx576wozDEOUTCpgJqefklnHdcBy5oQ83f7+4OKj
// SIG // 92G44noOUrL0/Eoy1DW6ZhU3vkINvN9s7HHNIA7Zhgqh
// SIG // ggIfMIICGwYJKoZIhvcNAQkGMYICDDCCAggCAQEwgYcw
// SIG // eTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWlj
// SIG // cm9zb2Z0IFRpbWVzdGFtcGluZyBQQ0ECCmEGlC0AAAAA
// SIG // AAkwBwYFKw4DAhqgXTAYBgkqhkiG9w0BCQMxCwYJKoZI
// SIG // hvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0xMTA4MTAxOTU4
// SIG // NDlaMCMGCSqGSIb3DQEJBDEWBBR1f1YJd9LZvs1arp0E
// SIG // PecWZEmwkzANBgkqhkiG9w0BAQUFAASCAQBRb8HaDZtJ
// SIG // uRKQ/S9HiYuogfq/ofKIc6oDJjPrY+7sqUMCH685GgE6
// SIG // OAlqHUJwFIK9o6YGy6o+D+Jxl43MCb9r4bgqZoWdbX06
// SIG // DdLdqwKWIDMetmxk2E2bR5ODZ6SCovtay3ynVOedxyAj
// SIG // 3ZLLgrewhN3HVjXXRZ4jN5APPZ8+ltwip1XUZi0NOwgd
// SIG // JePzqar5ujctf3t+k0l/Z3gXKfTeW2dyAj8U2lBWeNYZ
// SIG // 2aAy9i63jEx4W0h4tiXU/Z7MNPrvtDZo134DdbfLo98v
// SIG // IuxAgR8zFSo/T8JtfbAxo3smwUm5C59Ig+xy4AgPYbyj
// SIG // 0cXUT/gS6s9tnfJ9z8tl2w4d
// SIG // End signature block
