function FindProxyForURL(url, host)
{
  if (shExpMatch(host, "*.local") || shExpMatch(host, "172.*")) {
    return "SOCKS localhost:9999";
  } else {
    return "DIRECT";
  }
}
