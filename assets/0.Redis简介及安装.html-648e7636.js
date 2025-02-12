import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as o,a as n,e,d as c,b as s}from"./app-ec12a113.js";const m={},d=s(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> Docker安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -itd --name redis1 -p 6379:6379 -v /mydata/redis/data:/data redis:6.2.4 --requirepass 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>自定义配置文件<code>redis.conf</code>：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">bind</span> <span class="token value attr-value">0.0.0.0</span>
<span class="token key attr-name">port</span> <span class="token value attr-value">6379</span>
<span class="token key attr-name">save</span> <span class="token value attr-value">60 2 ## RDB配置，60秒有两个改动触发RDB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>redis.conf示例文件，以6.0为例，如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># Redis configuration file example.</span>
<span class="token comment">#</span>
<span class="token comment"># Note that in order to read the configuration file, Redis must be</span>
<span class="token comment"># started with the file path as first argument:</span>
<span class="token comment">#</span>
<span class="token comment"># ./redis-server /path/to/redis.conf</span>

<span class="token comment"># Note on units: when memory size is needed, it is possible to specify</span>
<span class="token comment"># it in the usual form of 1k 5GB 4M and so forth:</span>
<span class="token comment">#</span>
<span class="token comment"># 1k =&gt; 1000 bytes</span>
<span class="token comment"># 1kb =&gt; 1024 bytes</span>
<span class="token comment"># 1m =&gt; 1000000 bytes</span>
<span class="token comment"># 1mb =&gt; 1024*1024 bytes</span>
<span class="token comment"># 1g =&gt; 1000000000 bytes</span>
<span class="token comment"># 1gb =&gt; 1024*1024*1024 bytes</span>
<span class="token comment">#</span>
<span class="token comment"># units are case insensitive so 1GB 1Gb 1gB are all the same.</span>

<span class="token comment">################################## INCLUDES ###################################</span>

<span class="token comment"># Include one or more other config files here.  This is useful if you</span>
<span class="token comment"># have a standard template that goes to all Redis servers but also need</span>
<span class="token comment"># to customize a few per-server settings.  Include files can include</span>
<span class="token comment"># other files, so use this wisely.</span>
<span class="token comment">#</span>
<span class="token comment"># Note that option &quot;include&quot; won&#39;t be rewritten by command &quot;CONFIG REWRITE&quot;</span>
<span class="token comment"># from admin or Redis Sentinel. Since Redis always uses the last processed</span>
<span class="token comment"># line as value of a configuration directive, you&#39;d better put includes</span>
<span class="token comment"># at the beginning of this file to avoid overwriting config change at runtime.</span>
<span class="token comment">#</span>
<span class="token comment"># If instead you are interested in using includes to override configuration</span>
<span class="token comment"># options, it is better to use include as the last line.</span>
<span class="token comment">#</span>
<span class="token comment"># include /path/to/local.conf</span>
<span class="token comment"># include /path/to/other.conf</span>

<span class="token comment">################################## MODULES #####################################</span>

<span class="token comment"># Load modules at startup. If the server is not able to load modules</span>
<span class="token comment"># it will abort. It is possible to use multiple loadmodule directives.</span>
<span class="token comment">#</span>
<span class="token comment"># loadmodule /path/to/my_module.so</span>
<span class="token comment"># loadmodule /path/to/other_module.so</span>

<span class="token comment">################################## NETWORK #####################################</span>

<span class="token comment"># By default, if no &quot;bind&quot; configuration directive is specified, Redis listens</span>
<span class="token comment"># for connections from all available network interfaces on the host machine.</span>
<span class="token comment"># It is possible to listen to just one or multiple selected interfaces using</span>
<span class="token comment"># the &quot;bind&quot; configuration directive, followed by one or more IP addresses.</span>
<span class="token comment">#</span>
<span class="token comment"># Examples:</span>
<span class="token comment">#</span>
<span class="token comment"># bind 192.168.1.100 10.0.0.1</span>
<span class="token comment"># bind 127.0.0.1 ::1</span>
<span class="token comment">#</span>
<span class="token comment"># ~~~ WARNING ~~~ If the computer running Redis is directly exposed to the</span>
<span class="token comment"># internet, binding to all the interfaces is dangerous and will expose the</span>
<span class="token comment"># instance to everybody on the internet. So by default we uncomment the</span>
<span class="token comment"># following bind directive, that will force Redis to listen only on the</span>
<span class="token comment"># IPv4 loopback interface address (this means Redis will only be able to</span>
<span class="token comment"># accept client connections from the same host that it is running on).</span>
<span class="token comment">#</span>
<span class="token comment"># IF YOU ARE SURE YOU WANT YOUR INSTANCE TO LISTEN TO ALL THE INTERFACES</span>
<span class="token comment"># JUST COMMENT OUT THE FOLLOWING LINE.</span>
<span class="token comment"># ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</span>
<span class="token key attr-name">bind</span> <span class="token value attr-value">127.0.0.1</span>

<span class="token comment"># Protected mode is a layer of security protection, in order to avoid that</span>
<span class="token comment"># Redis instances left open on the internet are accessed and exploited.</span>
<span class="token comment">#</span>
<span class="token comment"># When protected mode is on and if:</span>
<span class="token comment">#</span>
<span class="token comment"># 1) The server is not binding explicitly to a set of addresses using the</span>
<span class="token comment">#    &quot;bind&quot; directive.</span>
<span class="token comment"># 2) No password is configured.</span>
<span class="token comment">#</span>
<span class="token comment"># The server only accepts connections from clients connecting from the</span>
<span class="token comment"># IPv4 and IPv6 loopback addresses 127.0.0.1 and ::1, and from Unix domain</span>
<span class="token comment"># sockets.</span>
<span class="token comment">#</span>
<span class="token comment"># By default protected mode is enabled. You should disable it only if</span>
<span class="token comment"># you are sure you want clients from other hosts to connect to Redis</span>
<span class="token comment"># even if no authentication is configured, nor a specific set of interfaces</span>
<span class="token comment"># are explicitly listed using the &quot;bind&quot; directive.</span>
<span class="token key attr-name">protected-mode</span> <span class="token value attr-value">yes</span>

<span class="token comment"># Accept connections on the specified port, default is 6379 (IANA #815344).</span>
<span class="token comment"># If port 0 is specified Redis will not listen on a TCP socket.</span>
<span class="token key attr-name">port</span> <span class="token value attr-value">6379</span>

<span class="token comment"># TCP listen() backlog.</span>
<span class="token comment">#</span>
<span class="token comment"># In high requests-per-second environments you need a high backlog in order</span>
<span class="token comment"># to avoid slow clients connection issues. Note that the Linux kernel</span>
<span class="token comment"># will silently truncate it to the value of /proc/sys/net/core/somaxconn so</span>
<span class="token comment"># make sure to raise both the value of somaxconn and tcp_max_syn_backlog</span>
<span class="token comment"># in order to get the desired effect.</span>
<span class="token key attr-name">tcp-backlog</span> <span class="token value attr-value">511</span>

<span class="token comment"># Unix socket.</span>
<span class="token comment">#</span>
<span class="token comment"># Specify the path for the Unix socket that will be used to listen for</span>
<span class="token comment"># incoming connections. There is no default, so Redis will not listen</span>
<span class="token comment"># on a unix socket when not specified.</span>
<span class="token comment">#</span>
<span class="token comment"># unixsocket /tmp/redis.sock</span>
<span class="token comment"># unixsocketperm 700</span>

<span class="token comment"># Close the connection after a client is idle for N seconds (0 to disable)</span>
<span class="token key attr-name">timeout</span> <span class="token value attr-value">0</span>

<span class="token comment"># TCP keepalive.</span>
<span class="token comment">#</span>
<span class="token comment"># If non-zero, use SO_KEEPALIVE to send TCP ACKs to clients in absence</span>
<span class="token comment"># of communication. This is useful for two reasons:</span>
<span class="token comment">#</span>
<span class="token comment"># 1) Detect dead peers.</span>
<span class="token comment"># 2) Force network equipment in the middle to consider the connection to be</span>
<span class="token comment">#    alive.</span>
<span class="token comment">#</span>
<span class="token comment"># On Linux, the specified value (in seconds) is the period used to send ACKs.</span>
<span class="token comment"># Note that to close the connection the double of the time is needed.</span>
<span class="token comment"># On other kernels the period depends on the kernel configuration.</span>
<span class="token comment">#</span>
<span class="token comment"># A reasonable value for this option is 300 seconds, which is the new</span>
<span class="token comment"># Redis default starting with Redis 3.2.1.</span>
<span class="token key attr-name">tcp-keepalive</span> <span class="token value attr-value">300</span>

<span class="token comment">################################# TLS/SSL #####################################</span>

<span class="token comment"># By default, TLS/SSL is disabled. To enable it, the &quot;tls-port&quot; configuration</span>
<span class="token comment"># directive can be used to define TLS-listening ports. To enable TLS on the</span>
<span class="token comment"># default port, use:</span>
<span class="token comment">#</span>
<span class="token comment"># port 0</span>
<span class="token comment"># tls-port 6379</span>

<span class="token comment"># Configure a X.509 certificate and private key to use for authenticating the</span>
<span class="token comment"># server to connected clients, masters or cluster peers.  These files should be</span>
<span class="token comment"># PEM formatted.</span>
<span class="token comment">#</span>
<span class="token comment"># tls-cert-file redis.crt </span>
<span class="token comment"># tls-key-file redis.key</span>

<span class="token comment"># Configure a DH parameters file to enable Diffie-Hellman (DH) key exchange:</span>
<span class="token comment">#</span>
<span class="token comment"># tls-dh-params-file redis.dh</span>

<span class="token comment"># Configure a CA certificate(s) bundle or directory to authenticate TLS/SSL</span>
<span class="token comment"># clients and peers.  Redis requires an explicit configuration of at least one</span>
<span class="token comment"># of these, and will not implicitly use the system wide configuration.</span>
<span class="token comment">#</span>
<span class="token comment"># tls-ca-cert-file ca.crt</span>
<span class="token comment"># tls-ca-cert-dir /etc/ssl/certs</span>

<span class="token comment"># By default, clients (including replica servers) on a TLS port are required</span>
<span class="token comment"># to authenticate using valid client side certificates.</span>
<span class="token comment">#</span>
<span class="token comment"># If &quot;no&quot; is specified, client certificates are not required and not accepted.</span>
<span class="token comment"># If &quot;optional&quot; is specified, client certificates are accepted and must be</span>
<span class="token comment"># valid if provided, but are not required.</span>
<span class="token comment">#</span>
<span class="token comment"># tls-auth-clients no</span>
<span class="token comment"># tls-auth-clients optional</span>

<span class="token comment"># By default, a Redis replica does not attempt to establish a TLS connection</span>
<span class="token comment"># with its master.</span>
<span class="token comment">#</span>
<span class="token comment"># Use the following directive to enable TLS on replication links.</span>
<span class="token comment">#</span>
<span class="token comment"># tls-replication yes</span>

<span class="token comment"># By default, the Redis Cluster bus uses a plain TCP connection. To enable</span>
<span class="token comment"># TLS for the bus protocol, use the following directive:</span>
<span class="token comment">#</span>
<span class="token comment"># tls-cluster yes</span>

<span class="token comment"># Explicitly specify TLS versions to support. Allowed values are case insensitive</span>
<span class="token comment"># and include &quot;TLSv1&quot;, &quot;TLSv1.1&quot;, &quot;TLSv1.2&quot;, &quot;TLSv1.3&quot; (OpenSSL &gt;= 1.1.1) or</span>
<span class="token comment"># any combination. To enable only TLSv1.2 and TLSv1.3, use:</span>
<span class="token comment">#</span>
<span class="token comment"># tls-protocols &quot;TLSv1.2 TLSv1.3&quot;</span>

<span class="token comment"># Configure allowed ciphers.  See the ciphers(1ssl) manpage for more information</span>
<span class="token comment"># about the syntax of this string.</span>
<span class="token comment">#</span>
<span class="token comment"># Note: this configuration applies only to &lt;= TLSv1.2.</span>
<span class="token comment">#</span>
<span class="token comment"># tls-ciphers DEFAULT:!MEDIUM</span>

<span class="token comment"># Configure allowed TLSv1.3 ciphersuites.  See the ciphers(1ssl) manpage for more</span>
<span class="token comment"># information about the syntax of this string, and specifically for TLSv1.3</span>
<span class="token comment"># ciphersuites.</span>
<span class="token comment">#</span>
<span class="token comment"># tls-ciphersuites TLS_CHACHA20_POLY1305_SHA256</span>

<span class="token comment"># When choosing a cipher, use the server&#39;s preference instead of the client</span>
<span class="token comment"># preference. By default, the server follows the client&#39;s preference.</span>
<span class="token comment">#</span>
<span class="token comment"># tls-prefer-server-ciphers yes</span>

<span class="token comment"># By default, TLS session caching is enabled to allow faster and less expensive</span>
<span class="token comment"># reconnections by clients that support it. Use the following directive to disable</span>
<span class="token comment"># caching.</span>
<span class="token comment">#</span>
<span class="token comment"># tls-session-caching no</span>

<span class="token comment"># Change the default number of TLS sessions cached. A zero value sets the cache</span>
<span class="token comment"># to unlimited size. The default size is 20480.</span>
<span class="token comment">#</span>
<span class="token comment"># tls-session-cache-size 5000</span>

<span class="token comment"># Change the default timeout of cached TLS sessions. The default timeout is 300</span>
<span class="token comment"># seconds.</span>
<span class="token comment">#</span>
<span class="token comment"># tls-session-cache-timeout 60</span>

<span class="token comment">################################# GENERAL #####################################</span>

<span class="token comment"># By default Redis does not run as a daemon. Use &#39;yes&#39; if you need it.</span>
<span class="token comment"># Note that Redis will write a pid file in /var/run/redis.pid when daemonized.</span>
<span class="token key attr-name">daemonize</span> <span class="token value attr-value">no</span>

<span class="token comment"># If you run Redis from upstart or systemd, Redis can interact with your</span>
<span class="token comment"># supervision tree. Options:</span>
<span class="token comment">#   supervised no      - no supervision interaction</span>
<span class="token comment">#   supervised upstart - signal upstart by putting Redis into SIGSTOP mode</span>
<span class="token comment">#                        requires &quot;expect stop&quot; in your upstart job config</span>
<span class="token comment">#   supervised systemd - signal systemd by writing READY=1 to $NOTIFY_SOCKET</span>
<span class="token comment">#   supervised auto    - detect upstart or systemd method based on</span>
<span class="token comment">#                        UPSTART_JOB or NOTIFY_SOCKET environment variables</span>
<span class="token comment"># Note: these supervision methods only signal &quot;process is ready.&quot;</span>
<span class="token comment">#       They do not enable continuous pings back to your supervisor.</span>
<span class="token key attr-name">supervised</span> <span class="token value attr-value">no</span>

<span class="token comment"># If a pid file is specified, Redis writes it where specified at startup</span>
<span class="token comment"># and removes it at exit.</span>
<span class="token comment">#</span>
<span class="token comment"># When the server runs non daemonized, no pid file is created if none is</span>
<span class="token comment"># specified in the configuration. When the server is daemonized, the pid file</span>
<span class="token comment"># is used even if not specified, defaulting to &quot;/var/run/redis.pid&quot;.</span>
<span class="token comment">#</span>
<span class="token comment"># Creating a pid file is best effort: if Redis is not able to create it</span>
<span class="token comment"># nothing bad happens, the server will start and run normally.</span>
<span class="token key attr-name">pidfile</span> <span class="token value attr-value">/var/run/redis_6379.pid</span>

<span class="token comment"># Specify the server verbosity level.</span>
<span class="token comment"># This can be one of:</span>
<span class="token comment"># debug (a lot of information, useful for development/testing)</span>
<span class="token comment"># verbose (many rarely useful info, but not a mess like the debug level)</span>
<span class="token comment"># notice (moderately verbose, what you want in production probably)</span>
<span class="token comment"># warning (only very important / critical messages are logged)</span>
<span class="token key attr-name">loglevel</span> <span class="token value attr-value">notice</span>

<span class="token comment"># Specify the log file name. Also the empty string can be used to force</span>
<span class="token comment"># Redis to log on the standard output. Note that if you use standard</span>
<span class="token comment"># output for logging but daemonize, logs will be sent to /dev/null</span>
<span class="token key attr-name">logfile</span> <span class="token value attr-value">&quot;&quot;</span>

<span class="token comment"># To enable logging to the system logger, just set &#39;syslog-enabled&#39; to yes,</span>
<span class="token comment"># and optionally update the other syslog parameters to suit your needs.</span>
<span class="token comment"># syslog-enabled no</span>

<span class="token comment"># Specify the syslog identity.</span>
<span class="token comment"># syslog-ident redis</span>

<span class="token comment"># Specify the syslog facility. Must be USER or between LOCAL0-LOCAL7.</span>
<span class="token comment"># syslog-facility local0</span>

<span class="token comment"># Set the number of databases. The default database is DB 0, you can select</span>
<span class="token comment"># a different one on a per-connection basis using SELECT &lt;dbid&gt; where</span>
<span class="token comment"># dbid is a number between 0 and &#39;databases&#39;-1</span>
<span class="token key attr-name">databases</span> <span class="token value attr-value">16</span>

<span class="token comment"># By default Redis shows an ASCII art logo only when started to log to the</span>
<span class="token comment"># standard output and if the standard output is a TTY. Basically this means</span>
<span class="token comment"># that normally a logo is displayed only in interactive sessions.</span>
<span class="token comment">#</span>
<span class="token comment"># However it is possible to force the pre-4.0 behavior and always show a</span>
<span class="token comment"># ASCII art logo in startup logs by setting the following option to yes.</span>
<span class="token key attr-name">always-show-logo</span> <span class="token value attr-value">yes</span>

<span class="token comment">################################ SNAPSHOTTING  ################################</span>
<span class="token comment">#</span>
<span class="token comment"># Save the DB on disk:</span>
<span class="token comment">#</span>
<span class="token comment">#   save &lt;seconds&gt; &lt;changes&gt;</span>
<span class="token comment">#</span>
<span class="token comment">#   Will save the DB if both the given number of seconds and the given</span>
<span class="token comment">#   number of write operations against the DB occurred.</span>
<span class="token comment">#</span>
<span class="token comment">#   In the example below the behavior will be to save:</span>
<span class="token comment">#   after 900 sec (15 min) if at least 1 key changed</span>
<span class="token comment">#   after 300 sec (5 min) if at least 10 keys changed</span>
<span class="token comment">#   after 60 sec if at least 10000 keys changed</span>
<span class="token comment">#</span>
<span class="token comment">#   Note: you can disable saving completely by commenting out all &quot;save&quot; lines.</span>
<span class="token comment">#</span>
<span class="token comment">#   It is also possible to remove all the previously configured save</span>
<span class="token comment">#   points by adding a save directive with a single empty string argument</span>
<span class="token comment">#   like in the following example:</span>
<span class="token comment">#</span>
<span class="token comment">#   save &quot;&quot;</span>

<span class="token key attr-name">save</span> <span class="token value attr-value">900 1</span>
<span class="token key attr-name">save</span> <span class="token value attr-value">300 10</span>
<span class="token key attr-name">save</span> <span class="token value attr-value">60 10000</span>

<span class="token comment"># By default Redis will stop accepting writes if RDB snapshots are enabled</span>
<span class="token comment"># (at least one save point) and the latest background save failed.</span>
<span class="token comment"># This will make the user aware (in a hard way) that data is not persisting</span>
<span class="token comment"># on disk properly, otherwise chances are that no one will notice and some</span>
<span class="token comment"># disaster will happen.</span>
<span class="token comment">#</span>
<span class="token comment"># If the background saving process will start working again Redis will</span>
<span class="token comment"># automatically allow writes again.</span>
<span class="token comment">#</span>
<span class="token comment"># However if you have setup your proper monitoring of the Redis server</span>
<span class="token comment"># and persistence, you may want to disable this feature so that Redis will</span>
<span class="token comment"># continue to work as usual even if there are problems with disk,</span>
<span class="token comment"># permissions, and so forth.</span>
<span class="token key attr-name">stop-writes-on-bgsave-error</span> <span class="token value attr-value">yes</span>

<span class="token comment"># Compress string objects using LZF when dump .rdb databases?</span>
<span class="token comment"># By default compression is enabled as it&#39;s almost always a win.</span>
<span class="token comment"># If you want to save some CPU in the saving child set it to &#39;no&#39; but</span>
<span class="token comment"># the dataset will likely be bigger if you have compressible values or keys.</span>
<span class="token key attr-name">rdbcompression</span> <span class="token value attr-value">yes</span>

<span class="token comment"># Since version 5 of RDB a CRC64 checksum is placed at the end of the file.</span>
<span class="token comment"># This makes the format more resistant to corruption but there is a performance</span>
<span class="token comment"># hit to pay (around 10%) when saving and loading RDB files, so you can disable it</span>
<span class="token comment"># for maximum performances.</span>
<span class="token comment">#</span>
<span class="token comment"># RDB files created with checksum disabled have a checksum of zero that will</span>
<span class="token comment"># tell the loading code to skip the check.</span>
<span class="token key attr-name">rdbchecksum</span> <span class="token value attr-value">yes</span>

<span class="token comment"># The filename where to dump the DB</span>
<span class="token key attr-name">dbfilename</span> <span class="token value attr-value">dump.rdb</span>

<span class="token comment"># Remove RDB files used by replication in instances without persistence</span>
<span class="token comment"># enabled. By default this option is disabled, however there are environments</span>
<span class="token comment"># where for regulations or other security concerns, RDB files persisted on</span>
<span class="token comment"># disk by masters in order to feed replicas, or stored on disk by replicas</span>
<span class="token comment"># in order to load them for the initial synchronization, should be deleted</span>
<span class="token comment"># ASAP. Note that this option ONLY WORKS in instances that have both AOF</span>
<span class="token comment"># and RDB persistence disabled, otherwise is completely ignored.</span>
<span class="token comment">#</span>
<span class="token comment"># An alternative (and sometimes better) way to obtain the same effect is</span>
<span class="token comment"># to use diskless replication on both master and replicas instances. However</span>
<span class="token comment"># in the case of replicas, diskless is not always an option.</span>
<span class="token key attr-name">rdb-del-sync-files</span> <span class="token value attr-value">no</span>

<span class="token comment"># The working directory.</span>
<span class="token comment">#</span>
<span class="token comment"># The DB will be written inside this directory, with the filename specified</span>
<span class="token comment"># above using the &#39;dbfilename&#39; configuration directive.</span>
<span class="token comment">#</span>
<span class="token comment"># The Append Only File will also be created inside this directory.</span>
<span class="token comment">#</span>
<span class="token comment"># Note that you must specify a directory here, not a file name.</span>
<span class="token key attr-name">dir</span> <span class="token value attr-value">./</span>

<span class="token comment">################################# REPLICATION #################################</span>

<span class="token comment"># Master-Replica replication. Use replicaof to make a Redis instance a copy of</span>
<span class="token comment"># another Redis server. A few things to understand ASAP about Redis replication.</span>
<span class="token comment">#</span>
<span class="token comment">#   +------------------+      +---------------+</span>
<span class="token comment">#   |      Master      | ---&gt; |    Replica    |</span>
<span class="token comment">#   | (receive writes) |      |  (exact copy) |</span>
<span class="token comment">#   +------------------+      +---------------+</span>
<span class="token comment">#</span>
<span class="token comment"># 1) Redis replication is asynchronous, but you can configure a master to</span>
<span class="token comment">#    stop accepting writes if it appears to be not connected with at least</span>
<span class="token comment">#    a given number of replicas.</span>
<span class="token comment"># 2) Redis replicas are able to perform a partial resynchronization with the</span>
<span class="token comment">#    master if the replication link is lost for a relatively small amount of</span>
<span class="token comment">#    time. You may want to configure the replication backlog size (see the next</span>
<span class="token comment">#    sections of this file) with a sensible value depending on your needs.</span>
<span class="token comment"># 3) Replication is automatic and does not need user intervention. After a</span>
<span class="token comment">#    network partition replicas automatically try to reconnect to masters</span>
<span class="token comment">#    and resynchronize with them.</span>
<span class="token comment">#</span>
<span class="token comment"># replicaof &lt;masterip&gt; &lt;masterport&gt;</span>

<span class="token comment"># If the master is password protected (using the &quot;requirepass&quot; configuration</span>
<span class="token comment"># directive below) it is possible to tell the replica to authenticate before</span>
<span class="token comment"># starting the replication synchronization process, otherwise the master will</span>
<span class="token comment"># refuse the replica request.</span>
<span class="token comment">#</span>
<span class="token comment"># masterauth &lt;master-password&gt;</span>
<span class="token comment">#</span>
<span class="token comment"># However this is not enough if you are using Redis ACLs (for Redis version</span>
<span class="token comment"># 6 or greater), and the default user is not capable of running the PSYNC</span>
<span class="token comment"># command and/or other commands needed for replication. In this case it&#39;s</span>
<span class="token comment"># better to configure a special user to use with replication, and specify the</span>
<span class="token comment"># masteruser configuration as such:</span>
<span class="token comment">#</span>
<span class="token comment"># masteruser &lt;username&gt;</span>
<span class="token comment">#</span>
<span class="token comment"># When masteruser is specified, the replica will authenticate against its</span>
<span class="token comment"># master using the new AUTH form: AUTH &lt;username&gt; &lt;password&gt;.</span>

<span class="token comment"># When a replica loses its connection with the master, or when the replication</span>
<span class="token comment"># is still in progress, the replica can act in two different ways:</span>
<span class="token comment">#</span>
<span class="token comment"># 1) if replica-serve-stale-data is set to &#39;yes&#39; (the default) the replica will</span>
<span class="token comment">#    still reply to client requests, possibly with out of date data, or the</span>
<span class="token comment">#    data set may just be empty if this is the first synchronization.</span>
<span class="token comment">#</span>
<span class="token comment"># 2) If replica-serve-stale-data is set to &#39;no&#39; the replica will reply with</span>
<span class="token comment">#    an error &quot;SYNC with master in progress&quot; to all commands except:</span>
<span class="token comment">#    INFO, REPLICAOF, AUTH, PING, SHUTDOWN, REPLCONF, ROLE, CONFIG, SUBSCRIBE,</span>
<span class="token comment">#    UNSUBSCRIBE, PSUBSCRIBE, PUNSUBSCRIBE, PUBLISH, PUBSUB, COMMAND, POST,</span>
<span class="token comment">#    HOST and LATENCY.</span>
<span class="token comment">#</span>
<span class="token key attr-name">replica-serve-stale-data</span> <span class="token value attr-value">yes</span>

<span class="token comment"># You can configure a replica instance to accept writes or not. Writing against</span>
<span class="token comment"># a replica instance may be useful to store some ephemeral data (because data</span>
<span class="token comment"># written on a replica will be easily deleted after resync with the master) but</span>
<span class="token comment"># may also cause problems if clients are writing to it because of a</span>
<span class="token comment"># misconfiguration.</span>
<span class="token comment">#</span>
<span class="token comment"># Since Redis 2.6 by default replicas are read-only.</span>
<span class="token comment">#</span>
<span class="token comment"># Note: read only replicas are not designed to be exposed to untrusted clients</span>
<span class="token comment"># on the internet. It&#39;s just a protection layer against misuse of the instance.</span>
<span class="token comment"># Still a read only replica exports by default all the administrative commands</span>
<span class="token comment"># such as CONFIG, DEBUG, and so forth. To a limited extent you can improve</span>
<span class="token comment"># security of read only replicas using &#39;rename-command&#39; to shadow all the</span>
<span class="token comment"># administrative / dangerous commands.</span>
<span class="token key attr-name">replica-read-only</span> <span class="token value attr-value">yes</span>

<span class="token comment"># Replication SYNC strategy: disk or socket.</span>
<span class="token comment">#</span>
<span class="token comment"># New replicas and reconnecting replicas that are not able to continue the</span>
<span class="token comment"># replication process just receiving differences, need to do what is called a</span>
<span class="token comment"># &quot;full synchronization&quot;. An RDB file is transmitted from the master to the</span>
<span class="token comment"># replicas.</span>
<span class="token comment">#</span>
<span class="token comment"># The transmission can happen in two different ways:</span>
<span class="token comment">#</span>
<span class="token comment"># 1) Disk-backed: The Redis master creates a new process that writes the RDB</span>
<span class="token comment">#                 file on disk. Later the file is transferred by the parent</span>
<span class="token comment">#                 process to the replicas incrementally.</span>
<span class="token comment"># 2) Diskless: The Redis master creates a new process that directly writes the</span>
<span class="token comment">#              RDB file to replica sockets, without touching the disk at all.</span>
<span class="token comment">#</span>
<span class="token comment"># With disk-backed replication, while the RDB file is generated, more replicas</span>
<span class="token comment"># can be queued and served with the RDB file as soon as the current child</span>
<span class="token comment"># producing the RDB file finishes its work. With diskless replication instead</span>
<span class="token comment"># once the transfer starts, new replicas arriving will be queued and a new</span>
<span class="token comment"># transfer will start when the current one terminates.</span>
<span class="token comment">#</span>
<span class="token comment"># When diskless replication is used, the master waits a configurable amount of</span>
<span class="token comment"># time (in seconds) before starting the transfer in the hope that multiple</span>
<span class="token comment"># replicas will arrive and the transfer can be parallelized.</span>
<span class="token comment">#</span>
<span class="token comment"># With slow disks and fast (large bandwidth) networks, diskless replication</span>
<span class="token comment"># works better.</span>
<span class="token key attr-name">repl-diskless-sync</span> <span class="token value attr-value">no</span>

<span class="token comment"># When diskless replication is enabled, it is possible to configure the delay</span>
<span class="token comment"># the server waits in order to spawn the child that transfers the RDB via socket</span>
<span class="token comment"># to the replicas.</span>
<span class="token comment">#</span>
<span class="token comment"># This is important since once the transfer starts, it is not possible to serve</span>
<span class="token comment"># new replicas arriving, that will be queued for the next RDB transfer, so the</span>
<span class="token comment"># server waits a delay in order to let more replicas arrive.</span>
<span class="token comment">#</span>
<span class="token comment"># The delay is specified in seconds, and by default is 5 seconds. To disable</span>
<span class="token comment"># it entirely just set it to 0 seconds and the transfer will start ASAP.</span>
<span class="token key attr-name">repl-diskless-sync-delay</span> <span class="token value attr-value">5</span>

<span class="token comment"># -----------------------------------------------------------------------------</span>
<span class="token comment"># WARNING: RDB diskless load is experimental. Since in this setup the replica</span>
<span class="token comment"># does not immediately store an RDB on disk, it may cause data loss during</span>
<span class="token comment"># failovers. RDB diskless load + Redis modules not handling I/O reads may also</span>
<span class="token comment"># cause Redis to abort in case of I/O errors during the initial synchronization</span>
<span class="token comment"># stage with the master. Use only if your do what you are doing.</span>
<span class="token comment"># -----------------------------------------------------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Replica can load the RDB it reads from the replication link directly from the</span>
<span class="token comment"># socket, or store the RDB to a file and read that file after it was completely</span>
<span class="token comment"># received from the master.</span>
<span class="token comment">#</span>
<span class="token comment"># In many cases the disk is slower than the network, and storing and loading</span>
<span class="token comment"># the RDB file may increase replication time (and even increase the master&#39;s</span>
<span class="token comment"># Copy on Write memory and salve buffers).</span>
<span class="token comment"># However, parsing the RDB file directly from the socket may mean that we have</span>
<span class="token comment"># to flush the contents of the current database before the full rdb was</span>
<span class="token comment"># received. For this reason we have the following options:</span>
<span class="token comment">#</span>
<span class="token comment"># &quot;disabled&quot;    - Don&#39;t use diskless load (store the rdb file to the disk first)</span>
<span class="token comment"># &quot;on-empty-db&quot; - Use diskless load only when it is completely safe.</span>
<span class="token comment"># &quot;swapdb&quot;      - Keep a copy of the current db contents in RAM while parsing</span>
<span class="token comment">#                 the data directly from the socket. note that this requires</span>
<span class="token comment">#                 sufficient memory, if you don&#39;t have it, you risk an OOM kill.</span>
<span class="token key attr-name">repl-diskless-load</span> <span class="token value attr-value">disabled</span>

<span class="token comment"># Replicas send PINGs to server in a predefined interval. It&#39;s possible to</span>
<span class="token comment"># change this interval with the repl_ping_replica_period option. The default</span>
<span class="token comment"># value is 10 seconds.</span>
<span class="token comment">#</span>
<span class="token comment"># repl-ping-replica-period 10</span>

<span class="token comment"># The following option sets the replication timeout for:</span>
<span class="token comment">#</span>
<span class="token comment"># 1) Bulk transfer I/O during SYNC, from the point of view of replica.</span>
<span class="token comment"># 2) Master timeout from the point of view of replicas (data, pings).</span>
<span class="token comment"># 3) Replica timeout from the point of view of masters (REPLCONF ACK pings).</span>
<span class="token comment">#</span>
<span class="token comment"># It is important to make sure that this value is greater than the value</span>
<span class="token comment"># specified for repl-ping-replica-period otherwise a timeout will be detected</span>
<span class="token comment"># every time there is low traffic between the master and the replica. The default</span>
<span class="token comment"># value is 60 seconds.</span>
<span class="token comment">#</span>
<span class="token comment"># repl-timeout 60</span>

<span class="token comment"># Disable TCP_NODELAY on the replica socket after SYNC?</span>
<span class="token comment">#</span>
<span class="token comment"># If you select &quot;yes&quot; Redis will use a smaller number of TCP packets and</span>
<span class="token comment"># less bandwidth to send data to replicas. But this can add a delay for</span>
<span class="token comment"># the data to appear on the replica side, up to 40 milliseconds with</span>
<span class="token comment"># Linux kernels using a default configuration.</span>
<span class="token comment">#</span>
<span class="token comment"># If you select &quot;no&quot; the delay for data to appear on the replica side will</span>
<span class="token comment"># be reduced but more bandwidth will be used for replication.</span>
<span class="token comment">#</span>
<span class="token comment"># By default we optimize for low latency, but in very high traffic conditions</span>
<span class="token comment"># or when the master and replicas are many hops away, turning this to &quot;yes&quot; may</span>
<span class="token comment"># be a good idea.</span>
<span class="token key attr-name">repl-disable-tcp-nodelay</span> <span class="token value attr-value">no</span>

<span class="token comment"># Set the replication backlog size. The backlog is a buffer that accumulates</span>
<span class="token comment"># replica data when replicas are disconnected for some time, so that when a</span>
<span class="token comment"># replica wants to reconnect again, often a full resync is not needed, but a</span>
<span class="token comment"># partial resync is enough, just passing the portion of data the replica</span>
<span class="token comment"># missed while disconnected.</span>
<span class="token comment">#</span>
<span class="token comment"># The bigger the replication backlog, the longer the replica can endure the</span>
<span class="token comment"># disconnect and later be able to perform a partial resynchronization.</span>
<span class="token comment">#</span>
<span class="token comment"># The backlog is only allocated if there is at least one replica connected.</span>
<span class="token comment">#</span>
<span class="token comment"># repl-backlog-size 1mb</span>

<span class="token comment"># After a master has no connected replicas for some time, the backlog will be</span>
<span class="token comment"># freed. The following option configures the amount of seconds that need to</span>
<span class="token comment"># elapse, starting from the time the last replica disconnected, for the backlog</span>
<span class="token comment"># buffer to be freed.</span>
<span class="token comment">#</span>
<span class="token comment"># Note that replicas never free the backlog for timeout, since they may be</span>
<span class="token comment"># promoted to masters later, and should be able to correctly &quot;partially</span>
<span class="token comment"># resynchronize&quot; with other replicas: hence they should always accumulate backlog.</span>
<span class="token comment">#</span>
<span class="token comment"># A value of 0 means to never release the backlog.</span>
<span class="token comment">#</span>
<span class="token comment"># repl-backlog-ttl 3600</span>

<span class="token comment"># The replica priority is an integer number published by Redis in the INFO</span>
<span class="token comment"># output. It is used by Redis Sentinel in order to select a replica to promote</span>
<span class="token comment"># into a master if the master is no longer working correctly.</span>
<span class="token comment">#</span>
<span class="token comment"># A replica with a low priority number is considered better for promotion, so</span>
<span class="token comment"># for instance if there are three replicas with priority 10, 100, 25 Sentinel</span>
<span class="token comment"># will pick the one with priority 10, that is the lowest.</span>
<span class="token comment">#</span>
<span class="token comment"># However a special priority of 0 marks the replica as not able to perform the</span>
<span class="token comment"># role of master, so a replica with priority of 0 will never be selected by</span>
<span class="token comment"># Redis Sentinel for promotion.</span>
<span class="token comment">#</span>
<span class="token comment"># By default the priority is 100.</span>
<span class="token key attr-name">replica-priority</span> <span class="token value attr-value">100</span>

<span class="token comment"># It is possible for a master to stop accepting writes if there are less than</span>
<span class="token comment"># N replicas connected, having a lag less or equal than M seconds.</span>
<span class="token comment">#</span>
<span class="token comment"># The N replicas need to be in &quot;online&quot; state.</span>
<span class="token comment">#</span>
<span class="token comment"># The lag in seconds, that must be &lt;= the specified value, is calculated from</span>
<span class="token comment"># the last ping received from the replica, that is usually sent every second.</span>
<span class="token comment">#</span>
<span class="token comment"># This option does not GUARANTEE that N replicas will accept the write, but</span>
<span class="token comment"># will limit the window of exposure for lost writes in case not enough replicas</span>
<span class="token comment"># are available, to the specified number of seconds.</span>
<span class="token comment">#</span>
<span class="token comment"># For example to require at least 3 replicas with a lag &lt;= 10 seconds use:</span>
<span class="token comment">#</span>
<span class="token comment"># min-replicas-to-write 3</span>
<span class="token comment"># min-replicas-max-lag 10</span>
<span class="token comment">#</span>
<span class="token comment"># Setting one or the other to 0 disables the feature.</span>
<span class="token comment">#</span>
<span class="token comment"># By default min-replicas-to-write is set to 0 (feature disabled) and</span>
<span class="token comment"># min-replicas-max-lag is set to 10.</span>

<span class="token comment"># A Redis master is able to list the address and port of the attached</span>
<span class="token comment"># replicas in different ways. For example the &quot;INFO replication&quot; section</span>
<span class="token comment"># offers this information, which is used, among other tools, by</span>
<span class="token comment"># Redis Sentinel in order to discover replica instances.</span>
<span class="token comment"># Another place where this info is available is in the output of the</span>
<span class="token comment"># &quot;ROLE&quot; command of a master.</span>
<span class="token comment">#</span>
<span class="token comment"># The listed IP address and port normally reported by a replica is</span>
<span class="token comment"># obtained in the following way:</span>
<span class="token comment">#</span>
<span class="token comment">#   IP: The address is auto detected by checking the peer address</span>
<span class="token comment">#   of the socket used by the replica to connect with the master.</span>
<span class="token comment">#</span>
<span class="token comment">#   Port: The port is communicated by the replica during the replication</span>
<span class="token comment">#   handshake, and is normally the port that the replica is using to</span>
<span class="token comment">#   listen for connections.</span>
<span class="token comment">#</span>
<span class="token comment"># However when port forwarding or Network Address Translation (NAT) is</span>
<span class="token comment"># used, the replica may actually be reachable via different IP and port</span>
<span class="token comment"># pairs. The following two options can be used by a replica in order to</span>
<span class="token comment"># report to its master a specific set of IP and port, so that both INFO</span>
<span class="token comment"># and ROLE will report those values.</span>
<span class="token comment">#</span>
<span class="token comment"># There is no need to use both the options if you need to override just</span>
<span class="token comment"># the port or the IP address.</span>
<span class="token comment">#</span>
<span class="token comment"># replica-announce-ip 5.5.5.5</span>
<span class="token comment"># replica-announce-port 1234</span>

<span class="token comment">############################### KEYS TRACKING #################################</span>

<span class="token comment"># Redis implements server assisted support for client side caching of values.</span>
<span class="token comment"># This is implemented using an invalidation table that remembers, using</span>
<span class="token comment"># 16 millions of slots, what clients may have certain subsets of keys. In turn</span>
<span class="token comment"># this is used in order to send invalidation messages to clients. Please</span>
<span class="token comment"># check this page to understand more about the feature:</span>
<span class="token comment">#</span>
<span class="token comment">#   https://redis.io/topics/client-side-caching</span>
<span class="token comment">#</span>
<span class="token comment"># When tracking is enabled for a client, all the read only queries are assumed</span>
<span class="token comment"># to be cached: this will force Redis to store information in the invalidation</span>
<span class="token comment"># table. When keys are modified, such information is flushed away, and</span>
<span class="token comment"># invalidation messages are sent to the clients. However if the workload is</span>
<span class="token comment"># heavily dominated by reads, Redis could use more and more memory in order</span>
<span class="token comment"># to track the keys fetched by many clients.</span>
<span class="token comment">#</span>
<span class="token comment"># For this reason it is possible to configure a maximum fill value for the</span>
<span class="token comment"># invalidation table. By default it is set to 1M of keys, and once this limit</span>
<span class="token comment"># is reached, Redis will start to evict keys in the invalidation table</span>
<span class="token comment"># even if they were not modified, just to reclaim memory: this will in turn</span>
<span class="token comment"># force the clients to invalidate the cached values. Basically the table</span>
<span class="token comment"># maximum size is a trade off between the memory you want to spend server</span>
<span class="token comment"># side to track information about who cached what, and the ability of clients</span>
<span class="token comment"># to retain cached objects in memory.</span>
<span class="token comment">#</span>
<span class="token comment"># If you set the value to 0, it means there are no limits, and Redis will</span>
<span class="token comment"># retain as many keys as needed in the invalidation table.</span>
<span class="token comment"># In the &quot;stats&quot; INFO section, you can find information about the number of</span>
<span class="token comment"># keys in the invalidation table at every given moment.</span>
<span class="token comment">#</span>
<span class="token comment"># Note: when key tracking is used in broadcasting mode, no memory is used</span>
<span class="token comment"># in the server side so this setting is useless.</span>
<span class="token comment">#</span>
<span class="token comment"># tracking-table-max-keys 1000000</span>

<span class="token comment">################################## SECURITY ###################################</span>

<span class="token comment"># Warning: since Redis is pretty fast, an outside user can try up to</span>
<span class="token comment"># 1 million passwords per second against a modern box. This means that you</span>
<span class="token comment"># should use very strong passwords, otherwise they will be very easy to break.</span>
<span class="token comment"># Note that because the password is really a shared secret between the client</span>
<span class="token comment"># and the server, and should not be memorized by any human, the password</span>
<span class="token comment"># can be easily a long string from /dev/urandom or whatever, so by using a</span>
<span class="token comment"># long and unguessable password no brute force attack will be possible.</span>

<span class="token comment"># Redis ACL users are defined in the following format:</span>
<span class="token comment">#</span>
<span class="token comment">#   user &lt;username&gt; ... acl rules ...</span>
<span class="token comment">#</span>
<span class="token comment"># For example:</span>
<span class="token comment">#</span>
<span class="token comment">#   user worker +@list +@connection ~jobs:* on &gt;ffa9203c493aa99</span>
<span class="token comment">#</span>
<span class="token comment"># The special username &quot;default&quot; is used for new connections. If this user</span>
<span class="token comment"># has the &quot;nopass&quot; rule, then new connections will be immediately authenticated</span>
<span class="token comment"># as the &quot;default&quot; user without the need of any password provided via the</span>
<span class="token comment"># AUTH command. Otherwise if the &quot;default&quot; user is not flagged with &quot;nopass&quot;</span>
<span class="token comment"># the connections will start in not authenticated state, and will require</span>
<span class="token comment"># AUTH (or the HELLO command AUTH option) in order to be authenticated and</span>
<span class="token comment"># start to work.</span>
<span class="token comment">#</span>
<span class="token comment"># The ACL rules that describe what a user can do are the following:</span>
<span class="token comment">#</span>
<span class="token comment">#  on           Enable the user: it is possible to authenticate as this user.</span>
<span class="token comment">#  off          Disable the user: it&#39;s no longer possible to authenticate</span>
<span class="token comment">#               with this user, however the already authenticated connections</span>
<span class="token comment">#               will still work.</span>
<span class="token comment">#  +&lt;command&gt;   Allow the execution of that command</span>
<span class="token comment">#  -&lt;command&gt;   Disallow the execution of that command</span>
<span class="token comment">#  +@&lt;category&gt; Allow the execution of all the commands in such category</span>
<span class="token key attr-name">category</span><span class="token punctuation">:</span>
<span class="token comment">#               and so forth, see the full list in the server.c file where</span>
<span class="token comment">#               the Redis command table is described and defined.</span>
<span class="token comment">#               The special category @all means all the commands, but currently</span>
<span class="token comment">#               present in the server, and that will be loaded in the future</span>
<span class="token comment">#               via modules.</span>
<span class="token comment">#  +&lt;command&gt;|subcommand    Allow a specific subcommand of an otherwise</span>
<span class="token comment">#                           disabled command. Note that this form is not</span>
<span class="token comment">#                           allowed as negative like -DEBUG|SEGFAULT, but</span>
<span class="token comment">#                           only additive starting with &quot;+&quot;.</span>
<span class="token comment">#  allcommands  Alias for +@all. Note that it implies the ability to execute</span>
<span class="token comment">#               all the future commands loaded via the modules system.</span>
<span class="token comment">#  nocommands   Alias for -@all.</span>
<span class="token comment">#  ~&lt;pattern&gt;   Add a pattern of keys that can be mentioned as part of</span>
<span class="token comment">#               commands. For instance ~* allows all the keys. The pattern</span>
<span class="token comment">#               is a glob-style pattern like the one of KEYS.</span>
<span class="token comment">#               It is possible to specify multiple patterns.</span>
<span class="token comment">#  allkeys      Alias for ~*</span>
<span class="token comment">#  resetkeys    Flush the list of allowed keys patterns.</span>
<span class="token comment">#  &gt;&lt;password&gt;  Add this password to the list of valid password for the user.</span>
<span class="token comment">#               For example &gt;mypass will add &quot;mypass&quot; to the list.</span>
<span class="token comment">#               This directive clears the &quot;nopass&quot; flag (see later).</span>
<span class="token comment">#  &lt;&lt;password&gt;  Remove this password from the list of valid passwords.</span>
<span class="token comment">#  nopass       All the set passwords of the user are removed, and the user</span>
<span class="token comment">#               is flagged as requiring no password: it means that every</span>
<span class="token comment">#               password will work against this user. If this directive is</span>
<span class="token comment">#               used for the default user, every new connection will be</span>
<span class="token comment">#               immediately authenticated with the default user without</span>
<span class="token comment">#               any explicit AUTH command required. Note that the &quot;resetpass&quot;</span>
<span class="token comment">#               directive will clear this condition.</span>
<span class="token comment">#  resetpass    Flush the list of allowed passwords. Moreover removes the</span>
<span class="token comment">#               &quot;nopass&quot; status. After &quot;resetpass&quot; the user has no associated</span>
<span class="token comment">#               passwords and there is no way to authenticate without adding</span>
<span class="token comment">#               some password (or setting it as &quot;nopass&quot; later).</span>
<span class="token comment">#  reset        Performs the following actions: resetpass, resetkeys, off,</span>
<span class="token comment">#               -@all. The user returns to the same state it has immediately</span>
<span class="token comment">#               after its creation.</span>
<span class="token comment">#</span>
<span class="token comment"># ACL rules can be specified in any order: for instance you can start with</span>
<span class="token comment"># passwords, then flags, or key patterns. However note that the additive</span>
<span class="token comment"># and subtractive rules will CHANGE MEANING depending on the ordering.</span>
<span class="token comment"># For instance see the following example:</span>
<span class="token comment">#</span>
<span class="token comment">#   user alice on +@all -DEBUG ~* &gt;somepassword</span>
<span class="token comment">#</span>
<span class="token comment"># This will allow &quot;alice&quot; to use all the commands with the exception of the</span>
<span class="token comment"># DEBUG command, since +@all added all the commands to the set of the commands</span>
<span class="token comment"># alice can use, and later DEBUG was removed. However if we invert the order</span>
<span class="token comment"># of two ACL rules the result will be different:</span>
<span class="token comment">#</span>
<span class="token comment">#   user alice on -DEBUG +@all ~* &gt;somepassword</span>
<span class="token comment">#</span>
<span class="token comment"># Now DEBUG was removed when alice had yet no commands in the set of allowed</span>
<span class="token comment"># commands, later all the commands are added, so the user will be able to</span>
<span class="token comment"># execute everything.</span>
<span class="token comment">#</span>
<span class="token comment"># Basically ACL rules are processed left-to-right.</span>
<span class="token comment">#</span>
<span class="token comment"># For more information about ACL configuration please refer to</span>
<span class="token comment"># the Redis web site at https://redis.io/topics/acl</span>

<span class="token comment"># ACL LOG</span>
<span class="token comment">#</span>
<span class="token comment"># The ACL Log tracks failed commands and authentication events associated</span>
<span class="token comment"># with ACLs. The ACL Log is useful to troubleshoot failed commands blocked </span>
<span class="token comment"># by ACLs. The ACL Log is stored in memory. You can reclaim memory with </span>
<span class="token comment"># ACL LOG RESET. Define the maximum entry length of the ACL Log below.</span>
<span class="token key attr-name">acllog-max-len</span> <span class="token value attr-value">128</span>

<span class="token comment"># Using an external ACL file</span>
<span class="token comment">#</span>
<span class="token comment"># Instead of configuring users here in this file, it is possible to use</span>
<span class="token comment"># a stand-alone file just listing users. The two methods cannot be mixed:</span>
<span class="token comment"># if you configure users here and at the same time you activate the external</span>
<span class="token comment"># ACL file, the server will refuse to start.</span>
<span class="token comment">#</span>
<span class="token comment"># The format of the external ACL user file is exactly the same as the</span>
<span class="token comment"># format that is used inside redis.conf to describe users.</span>
<span class="token comment">#</span>
<span class="token comment"># aclfile /etc/redis/users.acl</span>

<span class="token comment"># IMPORTANT NOTE: starting with Redis 6 &quot;requirepass&quot; is just a compatibility</span>
<span class="token comment"># layer on top of the new ACL system. The option effect will be just setting</span>
<span class="token comment"># the password for the default user. Clients will still authenticate using</span>
<span class="token comment"># AUTH &lt;password&gt; as usually, or more explicitly with AUTH default &lt;password&gt;</span>
<span class="token comment"># if they follow the new protocol: both will work.</span>
<span class="token comment">#</span>
<span class="token comment"># requirepass foobared</span>

<span class="token comment"># Command renaming (DEPRECATED).</span>
<span class="token comment">#</span>
<span class="token comment"># ------------------------------------------------------------------------</span>
<span class="token comment"># WARNING: avoid using this option if possible. Instead use ACLs to remove</span>
<span class="token comment"># commands from the default user, and put them only in some admin user you</span>
<span class="token comment"># create for administrative purposes.</span>
<span class="token comment"># ------------------------------------------------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># It is possible to change the name of dangerous commands in a shared</span>
<span class="token comment"># environment. For instance the CONFIG command may be renamed into something</span>
<span class="token comment"># hard to guess so that it will still be available for internal-use tools</span>
<span class="token comment"># but not available for general clients.</span>
<span class="token comment">#</span>
<span class="token comment"># Example:</span>
<span class="token comment">#</span>
<span class="token comment"># rename-command CONFIG b840fc02d524045429941cc15f59e41cb7be6c52</span>
<span class="token comment">#</span>
<span class="token comment"># It is also possible to completely kill a command by renaming it into</span>
<span class="token comment"># an empty string:</span>
<span class="token comment">#</span>
<span class="token comment"># rename-command CONFIG &quot;&quot;</span>
<span class="token comment">#</span>
<span class="token comment"># Please note that changing the name of commands that are logged into the</span>
<span class="token comment"># AOF file or transmitted to replicas may cause problems.</span>

<span class="token comment">################################### CLIENTS ####################################</span>

<span class="token comment"># Set the max number of connected clients at the same time. By default</span>
<span class="token comment"># this limit is set to 10000 clients, however if the Redis server is not</span>
<span class="token comment"># able to configure the process file limit to allow for the specified limit</span>
<span class="token comment"># the max number of allowed clients is set to the current file limit</span>
<span class="token comment"># minus 32 (as Redis reserves a few file descriptors for internal uses).</span>
<span class="token comment">#</span>
<span class="token comment"># Once the limit is reached Redis will close all the new connections sending</span>
<span class="token comment"># an error &#39;max number of clients reached&#39;.</span>
<span class="token comment">#</span>
<span class="token comment"># IMPORTANT: When Redis Cluster is used, the max number of connections is also</span>
<span class="token comment"># shared with the cluster bus: every node in the cluster will use two</span>
<span class="token comment"># connections, one incoming and another outgoing. It is important to size the</span>
<span class="token comment"># limit accordingly in case of very large clusters.</span>
<span class="token comment">#</span>
<span class="token comment"># maxclients 10000</span>

<span class="token comment">############################## MEMORY MANAGEMENT ################################</span>

<span class="token comment"># Set a memory usage limit to the specified amount of bytes.</span>
<span class="token comment"># When the memory limit is reached Redis will try to remove keys</span>
<span class="token comment"># according to the eviction policy selected (see maxmemory-policy).</span>
<span class="token comment">#</span>
<span class="token comment"># If Redis can&#39;t remove keys according to the policy, or if the policy is</span>
<span class="token comment"># set to &#39;noeviction&#39;, Redis will start to reply with errors to commands</span>
<span class="token comment"># that would use more memory, like SET, LPUSH, and so on, and will continue</span>
<span class="token comment"># to reply to read-only commands like GET.</span>
<span class="token comment">#</span>
<span class="token comment"># This option is usually useful when using Redis as an LRU or LFU cache, or to</span>
<span class="token comment"># set a hard memory limit for an instance (using the &#39;noeviction&#39; policy).</span>
<span class="token comment">#</span>
<span class="token comment"># WARNING: If you have replicas attached to an instance with maxmemory on,</span>
<span class="token comment"># the size of the output buffers needed to feed the replicas are subtracted</span>
<span class="token comment"># from the used memory count, so that network problems / resyncs will</span>
<span class="token comment"># not trigger a loop where keys are evicted, and in turn the output</span>
<span class="token comment"># buffer of replicas is full with DELs of keys evicted triggering the deletion</span>
<span class="token comment"># of more keys, and so forth until the database is completely emptied.</span>
<span class="token comment">#</span>
<span class="token comment"># In short... if you have replicas attached it is suggested that you set a lower</span>
<span class="token comment"># limit for maxmemory so that there is some free RAM on the system for replica</span>
<span class="token comment"># output buffers (but this is not needed if the policy is &#39;noeviction&#39;).</span>
<span class="token comment">#</span>
<span class="token comment"># maxmemory &lt;bytes&gt;</span>

<span class="token comment"># MAXMEMORY POLICY: how Redis will select what to remove when maxmemory</span>
<span class="token comment"># is reached. You can select one from the following behaviors:</span>
<span class="token comment">#</span>
<span class="token comment"># volatile-lru -&gt; Evict using approximated LRU, only keys with an expire set.</span>
<span class="token comment"># allkeys-lru -&gt; Evict any key using approximated LRU.</span>
<span class="token comment"># volatile-lfu -&gt; Evict using approximated LFU, only keys with an expire set.</span>
<span class="token comment"># allkeys-lfu -&gt; Evict any key using approximated LFU.</span>
<span class="token comment"># volatile-random -&gt; Remove a random key having an expire set.</span>
<span class="token comment"># allkeys-random -&gt; Remove a random key, any key.</span>
<span class="token comment"># volatile-ttl -&gt; Remove the key with the nearest expire time (minor TTL)</span>
<span class="token comment"># noeviction -&gt; Don&#39;t evict anything, just return an error on write operations.</span>
<span class="token comment">#</span>
<span class="token comment"># LRU means Least Recently Used</span>
<span class="token comment"># LFU means Least Frequently Used</span>
<span class="token comment">#</span>
<span class="token comment"># Both LRU, LFU and volatile-ttl are implemented using approximated</span>
<span class="token comment"># randomized algorithms.</span>
<span class="token comment">#</span>
<span class="token comment"># Note: with any of the above policies, Redis will return an error on write</span>
<span class="token comment">#       operations, when there are no suitable keys for eviction.</span>
<span class="token comment">#</span>
<span class="token comment">#       At the date of writing these commands are: set setnx setex append</span>
<span class="token comment">#       incr decr rpush lpush rpushx lpushx linsert lset rpoplpush sadd</span>
<span class="token comment">#       sinter sinterstore sunion sunionstore sdiff sdiffstore zadd zincrby</span>
<span class="token comment">#       zunionstore zinterstore hset hsetnx hmset hincrby incrby decrby</span>
<span class="token comment">#       getset mset msetnx exec sort</span>
<span class="token comment">#</span>
<span class="token comment"># The default is:</span>
<span class="token comment">#</span>
<span class="token comment"># maxmemory-policy noeviction</span>

<span class="token comment"># LRU, LFU and minimal TTL algorithms are not precise algorithms but approximated</span>
<span class="token comment"># algorithms (in order to save memory), so you can tune it for speed or</span>
<span class="token comment"># accuracy. By default Redis will check five keys and pick the one that was</span>
<span class="token comment"># used least recently, you can change the sample size using the following</span>
<span class="token comment"># configuration directive.</span>
<span class="token comment">#</span>
<span class="token comment"># The default of 5 produces good enough results. 10 Approximates very closely</span>
<span class="token comment"># true LRU but costs more CPU. 3 is faster but not very accurate.</span>
<span class="token comment">#</span>
<span class="token comment"># maxmemory-samples 5</span>

<span class="token comment"># Starting from Redis 5, by default a replica will ignore its maxmemory setting</span>
<span class="token comment"># (unless it is promoted to master after a failover or manually). It means</span>
<span class="token comment"># that the eviction of keys will be just handled by the master, sending the</span>
<span class="token comment"># DEL commands to the replica as keys evict in the master side.</span>
<span class="token comment">#</span>
<span class="token comment"># This behavior ensures that masters and replicas stay consistent, and is usually</span>
<span class="token comment"># what you want, however if your replica is writable, or you want the replica</span>
<span class="token comment"># to have a different memory setting, and you are sure all the writes performed</span>
<span class="token comment"># to the replica are idempotent, then you may change this default (but be sure</span>
<span class="token comment"># to understand what you are doing).</span>
<span class="token comment">#</span>
<span class="token comment"># Note that since the replica by default does not evict, it may end using more</span>
<span class="token comment"># memory than the one set via maxmemory (there are certain buffers that may</span>
<span class="token comment"># be larger on the replica, or data structures may sometimes take more memory</span>
<span class="token comment"># and so forth). So make sure you monitor your replicas and make sure they</span>
<span class="token comment"># have enough memory to never hit a real out-of-memory condition before the</span>
<span class="token comment"># master hits the configured maxmemory setting.</span>
<span class="token comment">#</span>
<span class="token comment"># replica-ignore-maxmemory yes</span>

<span class="token comment"># Redis reclaims expired keys in two ways: upon access when those keys are</span>
<span class="token comment"># found to be expired, and also in background, in what is called the</span>
<span class="token comment"># &quot;active expire key&quot;. The key space is slowly and interactively scanned</span>
<span class="token comment"># looking for expired keys to reclaim, so that it is possible to free memory</span>
<span class="token comment"># of keys that are expired and will never be accessed again in a short time.</span>
<span class="token comment">#</span>
<span class="token comment"># The default effort of the expire cycle will try to avoid having more than</span>
<span class="token comment"># ten percent of expired keys still in memory, and will try to avoid consuming</span>
<span class="token comment"># more than 25% of total memory and to add latency to the system. However</span>
<span class="token comment"># it is possible to increase the expire &quot;effort&quot; that is normally set to</span>
<span class="token comment"># &quot;1&quot;, to a greater value, up to the value &quot;10&quot;. At its maximum value the</span>
<span class="token comment"># system will use more CPU, longer cycles (and technically may introduce</span>
<span class="token comment"># more latency), and will tolerate less already expired keys still present</span>
<span class="token comment"># in the system. It&#39;s a tradeoff between memory, CPU and latency.</span>
<span class="token comment">#</span>
<span class="token comment"># active-expire-effort 1</span>

<span class="token comment">############################# LAZY FREEING ####################################</span>

<span class="token comment"># Redis has two primitives to delete keys. One is called DEL and is a blocking</span>
<span class="token comment"># deletion of the object. It means that the server stops processing new commands</span>
<span class="token comment"># in order to reclaim all the memory associated with an object in a synchronous</span>
<span class="token comment"># way. If the key deleted is associated with a small object, the time needed</span>
<span class="token comment"># in order to execute the DEL command is very small and comparable to most other</span>
<span class="token comment"># O(1) or O(log_N) commands in Redis. However if the key is associated with an</span>
<span class="token comment"># aggregated value containing millions of elements, the server can block for</span>
<span class="token comment"># a long time (even seconds) in order to complete the operation.</span>
<span class="token comment">#</span>
<span class="token comment"># For the above reasons Redis also offers non blocking deletion primitives</span>
<span class="token comment"># such as UNLINK (non blocking DEL) and the ASYNC option of FLUSHALL and</span>
<span class="token comment"># FLUSHDB commands, in order to reclaim memory in background. Those commands</span>
<span class="token comment"># are executed in constant time. Another thread will incrementally free the</span>
<span class="token comment"># object in the background as fast as possible.</span>
<span class="token comment">#</span>
<span class="token comment"># DEL, UNLINK and ASYNC option of FLUSHALL and FLUSHDB are user-controlled.</span>
<span class="token comment"># It&#39;s up to the design of the application to understand when it is a good</span>
<span class="token comment"># idea to use one or the other. However the Redis server sometimes has to</span>
<span class="token comment"># delete keys or flush the whole database as a side effect of other operations.</span>
<span class="token comment"># Specifically Redis deletes objects independently of a user call in the</span>
<span class="token comment"># following scenarios:</span>
<span class="token comment">#</span>
<span class="token comment"># 1) On eviction, because of the maxmemory and maxmemory policy configurations,</span>
<span class="token comment">#    in order to make room for new data, without going over the specified</span>
<span class="token comment">#    memory limit.</span>
<span class="token comment"># 2) Because of expire: when a key with an associated time to live (see the</span>
<span class="token comment">#    EXPIRE command) must be deleted from memory.</span>
<span class="token comment"># 3) Because of a side effect of a command that stores data on a key that may</span>
<span class="token comment">#    already exist. For example the RENAME command may delete the old key</span>
<span class="token comment">#    content when it is replaced with another one. Similarly SUNIONSTORE</span>
<span class="token comment">#    or SORT with STORE option may delete existing keys. The SET command</span>
<span class="token comment">#    itself removes any old content of the specified key in order to replace</span>
<span class="token comment">#    it with the specified string.</span>
<span class="token comment"># 4) During replication, when a replica performs a full resynchronization with</span>
<span class="token comment">#    its master, the content of the whole database is removed in order to</span>
<span class="token comment">#    load the RDB file just transferred.</span>
<span class="token comment">#</span>
<span class="token comment"># In all the above cases the default is to delete objects in a blocking way,</span>
<span class="token comment"># like if DEL was called. However you can configure each case specifically</span>
<span class="token comment"># in order to instead release memory in a non-blocking way like if UNLINK</span>
<span class="token comment"># was called, using the following configuration directives.</span>

<span class="token key attr-name">lazyfree-lazy-eviction</span> <span class="token value attr-value">no</span>
<span class="token key attr-name">lazyfree-lazy-expire</span> <span class="token value attr-value">no</span>
<span class="token key attr-name">lazyfree-lazy-server-del</span> <span class="token value attr-value">no</span>
<span class="token key attr-name">replica-lazy-flush</span> <span class="token value attr-value">no</span>

<span class="token comment"># It is also possible, for the case when to replace the user code DEL calls</span>
<span class="token comment"># with UNLINK calls is not easy, to modify the default behavior of the DEL</span>
<span class="token comment"># command to act exactly like UNLINK, using the following configuration</span>
<span class="token comment"># directive:</span>

<span class="token key attr-name">lazyfree-lazy-user-del</span> <span class="token value attr-value">no</span>

<span class="token comment">################################ THREADED I/O #################################</span>

<span class="token comment"># Redis is mostly single threaded, however there are certain threaded</span>
<span class="token comment"># operations such as UNLINK, slow I/O accesses and other things that are</span>
<span class="token comment"># performed on side threads.</span>
<span class="token comment">#</span>
<span class="token comment"># Now it is also possible to handle Redis clients socket reads and writes</span>
<span class="token comment"># in different I/O threads. Since especially writing is so slow, normally</span>
<span class="token comment"># Redis users use pipelining in order to speed up the Redis performances per</span>
<span class="token comment"># core, and spawn multiple instances in order to scale more. Using I/O</span>
<span class="token comment"># threads it is possible to easily speedup two times Redis without resorting</span>
<span class="token comment"># to pipelining nor sharding of the instance.</span>
<span class="token comment">#</span>
<span class="token comment"># By default threading is disabled, we suggest enabling it only in machines</span>
<span class="token comment"># that have at least 4 or more cores, leaving at least one spare core.</span>
<span class="token comment"># Using more than 8 threads is unlikely to help much. We also recommend using</span>
<span class="token comment"># threaded I/O only if you actually have performance problems, with Redis</span>
<span class="token comment"># instances being able to use a quite big percentage of CPU time, otherwise</span>
<span class="token comment"># there is no point in using this feature.</span>
<span class="token comment">#</span>
<span class="token comment"># So for instance if you have a four cores boxes, try to use 2 or 3 I/O</span>
<span class="token comment"># threads, if you have a 8 cores, try to use 6 threads. In order to</span>
<span class="token comment"># enable I/O threads use the following configuration directive:</span>
<span class="token comment">#</span>
<span class="token comment"># io-threads 4</span>
<span class="token comment">#</span>
<span class="token comment"># Setting io-threads to 1 will just use the main thread as usual.</span>
<span class="token comment"># When I/O threads are enabled, we only use threads for writes, that is</span>
<span class="token comment"># to thread the write(2) syscall and transfer the client buffers to the</span>
<span class="token comment"># socket. However it is also possible to enable threading of reads and</span>
<span class="token comment"># protocol parsing using the following configuration directive, by setting</span>
<span class="token comment"># it to yes:</span>
<span class="token comment">#</span>
<span class="token comment"># io-threads-do-reads no</span>
<span class="token comment">#</span>
<span class="token comment"># Usually threading reads doesn&#39;t help much.</span>
<span class="token comment">#</span>
<span class="token comment"># NOTE 1: This configuration directive cannot be changed at runtime via</span>
<span class="token comment"># CONFIG SET. Aso this feature currently does not work when SSL is</span>
<span class="token comment"># enabled.</span>
<span class="token comment">#</span>
<span class="token comment"># NOTE 2: If you want to test the Redis speedup using redis-benchmark, make</span>
<span class="token comment"># sure you also run the benchmark itself in threaded mode, using the</span>
<span class="token comment"># --threads option to match the number of Redis threads, otherwise you&#39;ll not</span>
<span class="token comment"># be able to notice the improvements.</span>

<span class="token comment">############################ KERNEL OOM CONTROL ##############################</span>

<span class="token comment"># On Linux, it is possible to hint the kernel OOM killer on what processes</span>
<span class="token comment"># should be killed first when out of memory.</span>
<span class="token comment">#</span>
<span class="token comment"># Enabling this feature makes Redis actively control the oom_score_adj value</span>
<span class="token comment"># for all its processes, depending on their role. The default scores will</span>
<span class="token comment"># attempt to have background child processes killed before all others, and</span>
<span class="token comment"># replicas killed before masters.</span>
<span class="token comment">#</span>
<span class="token comment"># Redis supports three options:</span>
<span class="token comment">#</span>
<span class="token comment"># no:       Don&#39;t make changes to oom-score-adj (default).</span>
<span class="token comment"># yes:      Alias to &quot;relative&quot; see below.</span>
<span class="token comment"># absolute: Values in oom-score-adj-values are written as is to the kernel.</span>
<span class="token comment"># relative: Values are used relative to the initial value of oom_score_adj when</span>
<span class="token comment">#           the server starts and are then clamped to a range of -1000 to 1000.</span>
<span class="token comment">#           Because typically the initial value is 0, they will often match the</span>
<span class="token comment">#           absolute values.</span>
<span class="token key attr-name">oom-score-adj</span> <span class="token value attr-value">no</span>

<span class="token comment"># When oom-score-adj is used, this directive controls the specific values used</span>
<span class="token comment"># for master, replica and background child processes. Values range -2000 to</span>
<span class="token comment"># 2000 (higher means more likely to be killed).</span>
<span class="token comment">#</span>
<span class="token comment"># Unprivileged processes (not root, and without CAP_SYS_RESOURCE capabilities)</span>
<span class="token comment"># can freely increase their value, but not decrease it below its initial</span>
<span class="token comment"># settings. This means that setting oom-score-adj to &quot;relative&quot; and setting the</span>
<span class="token comment"># oom-score-adj-values to positive values will always succeed.</span>
<span class="token key attr-name">oom-score-adj-values</span> <span class="token value attr-value">0 200 800</span>

<span class="token comment">############################## APPEND ONLY MODE ###############################</span>

<span class="token comment"># By default Redis asynchronously dumps the dataset on disk. This mode is</span>
<span class="token comment"># good enough in many applications, but an issue with the Redis process or</span>
<span class="token comment"># a power outage may result into a few minutes of writes lost (depending on</span>
<span class="token comment"># the configured save points).</span>
<span class="token comment">#</span>
<span class="token comment"># The Append Only File is an alternative persistence mode that provides</span>
<span class="token comment"># much better durability. For instance using the default data fsync policy</span>
<span class="token comment"># (see later in the config file) Redis can lose just one second of writes in a</span>
<span class="token comment"># dramatic event like a server power outage, or a single write if something</span>
<span class="token comment"># wrong with the Redis process itself happens, but the operating system is</span>
<span class="token comment"># still running correctly.</span>
<span class="token comment">#</span>
<span class="token comment"># AOF and RDB persistence can be enabled at the same time without problems.</span>
<span class="token comment"># If the AOF is enabled on startup Redis will load the AOF, that is the file</span>
<span class="token comment"># with the better durability guarantees.</span>
<span class="token comment">#</span>
<span class="token comment"># Please check http://redis.io/topics/persistence for more information.</span>

<span class="token key attr-name">appendonly</span> <span class="token value attr-value">no</span>

<span class="token comment"># The name of the append only file (default: &quot;appendonly.aof&quot;)</span>

<span class="token key attr-name">appendfilename</span> <span class="token value attr-value">&quot;appendonly.aof&quot;</span>

<span class="token comment"># The fsync() call tells the Operating System to actually write data on disk</span>
<span class="token comment"># instead of waiting for more data in the output buffer. Some OS will really flush</span>
<span class="token comment"># data on disk, some other OS will just try to do it ASAP.</span>
<span class="token comment">#</span>
<span class="token comment"># Redis supports three different modes:</span>
<span class="token comment">#</span>
<span class="token comment"># no: don&#39;t fsync, just let the OS flush the data when it wants. Faster.</span>
<span class="token comment"># always: fsync after every write to the append only log. Slow, Safest.</span>
<span class="token comment"># everysec: fsync only one time every second. Compromise.</span>
<span class="token comment">#</span>
<span class="token comment"># The default is &quot;everysec&quot;, as that&#39;s usually the right compromise between</span>
<span class="token comment"># speed and data safety. It&#39;s up to you to understand if you can relax this to</span>
<span class="token comment"># &quot;no&quot; that will let the operating system flush the output buffer when</span>
<span class="token comment"># it wants, for better performances (but if you can live with the idea of</span>
<span class="token comment"># some data loss consider the default persistence mode that&#39;s snapshotting),</span>
<span class="token comment"># or on the contrary, use &quot;always&quot; that&#39;s very slow but a bit safer than</span>
<span class="token comment"># everysec.</span>
<span class="token comment">#</span>
<span class="token comment"># More details please check the following article:</span>
<span class="token comment"># http://antirez.com/post/redis-persistence-demystified.html</span>
<span class="token comment">#</span>
<span class="token comment"># If unsure, use &quot;everysec&quot;.</span>

<span class="token comment"># appendfsync always</span>
<span class="token key attr-name">appendfsync</span> <span class="token value attr-value">everysec</span>
<span class="token comment"># appendfsync no</span>

<span class="token comment"># When the AOF fsync policy is set to always or everysec, and a background</span>
<span class="token comment"># saving process (a background save or AOF log background rewriting) is</span>
<span class="token comment"># performing a lot of I/O against the disk, in some Linux configurations</span>
<span class="token comment"># Redis may block too long on the fsync() call. Note that there is no fix for</span>
<span class="token comment"># this currently, as even performing fsync in a different thread will block</span>
<span class="token comment"># our synchronous write(2) call.</span>
<span class="token comment">#</span>
<span class="token comment"># In order to mitigate this problem it&#39;s possible to use the following option</span>
<span class="token comment"># that will prevent fsync() from being called in the main process while a</span>
<span class="token comment"># BGSAVE or BGREWRITEAOF is in progress.</span>
<span class="token comment">#</span>
<span class="token comment"># This means that while another child is saving, the durability of Redis is</span>
<span class="token comment"># the same as &quot;appendfsync none&quot;. In practical terms, this means that it is</span>
<span class="token comment"># possible to lose up to 30 seconds of log in the worst scenario (with the</span>
<span class="token comment"># default Linux settings).</span>
<span class="token comment">#</span>
<span class="token comment"># If you have latency problems turn this to &quot;yes&quot;. Otherwise leave it as</span>
<span class="token comment"># &quot;no&quot; that is the safest pick from the point of view of durability.</span>

<span class="token key attr-name">no-appendfsync-on-rewrite</span> <span class="token value attr-value">no</span>

<span class="token comment"># Automatic rewrite of the append only file.</span>
<span class="token comment"># Redis is able to automatically rewrite the log file implicitly calling</span>
<span class="token comment"># BGREWRITEAOF when the AOF log size grows by the specified percentage.</span>
<span class="token comment">#</span>
<span class="token comment"># This is how it works: Redis remembers the size of the AOF file after the</span>
<span class="token comment"># latest rewrite (if no rewrite has happened since the restart, the size of</span>
<span class="token comment"># the AOF at startup is used).</span>
<span class="token comment">#</span>
<span class="token comment"># This base size is compared to the current size. If the current size is</span>
<span class="token comment"># bigger than the specified percentage, the rewrite is triggered. Also</span>
<span class="token comment"># you need to specify a minimal size for the AOF file to be rewritten, this</span>
<span class="token comment"># is useful to avoid rewriting the AOF file even if the percentage increase</span>
<span class="token comment"># is reached but it is still pretty small.</span>
<span class="token comment">#</span>
<span class="token comment"># Specify a percentage of zero in order to disable the automatic AOF</span>
<span class="token comment"># rewrite feature.</span>

<span class="token key attr-name">auto-aof-rewrite-percentage</span> <span class="token value attr-value">100</span>
<span class="token key attr-name">auto-aof-rewrite-min-size</span> <span class="token value attr-value">64mb</span>

<span class="token comment"># An AOF file may be found to be truncated at the end during the Redis</span>
<span class="token comment"># startup process, when the AOF data gets loaded back into memory.</span>
<span class="token comment"># This may happen when the system where Redis is running</span>
<span class="token comment"># crashes, especially when an ext4 filesystem is mounted without the</span>
<span class="token comment"># data=ordered option (however this can&#39;t happen when Redis itself</span>
<span class="token comment"># crashes or aborts but the operating system still works correctly).</span>
<span class="token comment">#</span>
<span class="token comment"># Redis can either exit with an error when this happens, or load as much</span>
<span class="token comment"># data as possible (the default now) and start if the AOF file is found</span>
<span class="token comment"># to be truncated at the end. The following option controls this behavior.</span>
<span class="token comment">#</span>
<span class="token comment"># If aof-load-truncated is set to yes, a truncated AOF file is loaded and</span>
<span class="token comment"># the Redis server starts emitting a log to inform the user of the event.</span>
<span class="token comment"># Otherwise if the option is set to no, the server aborts with an error</span>
<span class="token comment"># and refuses to start. When the option is set to no, the user requires</span>
<span class="token comment"># to fix the AOF file using the &quot;redis-check-aof&quot; utility before to restart</span>
<span class="token comment"># the server.</span>
<span class="token comment">#</span>
<span class="token comment"># Note that if the AOF file will be found to be corrupted in the middle</span>
<span class="token comment"># the server will still exit with an error. This option only applies when</span>
<span class="token comment"># Redis will try to read more data from the AOF file but not enough bytes</span>
<span class="token comment"># will be found.</span>
<span class="token key attr-name">aof-load-truncated</span> <span class="token value attr-value">yes</span>

<span class="token comment"># When rewriting the AOF file, Redis is able to use an RDB preamble in the</span>
<span class="token comment"># AOF file for faster rewrites and recoveries. When this option is turned</span>
<span class="token comment"># on the rewritten AOF file is composed of two different stanzas:</span>
<span class="token comment">#</span>
<span class="token comment">#   [RDB file][AOF tail]</span>
<span class="token comment">#</span>
<span class="token comment"># When loading, Redis recognizes that the AOF file starts with the &quot;REDIS&quot;</span>
<span class="token comment"># string and loads the prefixed RDB file, then continues loading the AOF</span>
<span class="token comment"># tail.</span>
<span class="token key attr-name">aof-use-rdb-preamble</span> <span class="token value attr-value">yes</span>

<span class="token comment">################################ LUA SCRIPTING  ###############################</span>

<span class="token comment"># Max execution time of a Lua script in milliseconds.</span>
<span class="token comment">#</span>
<span class="token comment"># If the maximum execution time is reached Redis will log that a script is</span>
<span class="token comment"># still in execution after the maximum allowed time and will start to</span>
<span class="token comment"># reply to queries with an error.</span>
<span class="token comment">#</span>
<span class="token comment"># When a long running script exceeds the maximum execution time only the</span>
<span class="token comment"># SCRIPT KILL and SHUTDOWN NOSAVE commands are available. The first can be</span>
<span class="token comment"># used to stop a script that did not yet call any write commands. The second</span>
<span class="token comment"># is the only way to shut down the server in the case a write command was</span>
<span class="token comment"># already issued by the script but the user doesn&#39;t want to wait for the natural</span>
<span class="token comment"># termination of the script.</span>
<span class="token comment">#</span>
<span class="token comment"># Set it to 0 or a negative value for unlimited execution without warnings.</span>
<span class="token key attr-name">lua-time-limit</span> <span class="token value attr-value">5000</span>

<span class="token comment">################################ REDIS CLUSTER  ###############################</span>

<span class="token comment"># Normal Redis instances can&#39;t be part of a Redis Cluster; only nodes that are</span>
<span class="token comment"># started as cluster nodes can. In order to start a Redis instance as a</span>
<span class="token comment"># cluster node enable the cluster support uncommenting the following:</span>
<span class="token comment">#</span>
<span class="token comment"># cluster-enabled yes</span>

<span class="token comment"># Every cluster node has a cluster configuration file. This file is not</span>
<span class="token comment"># intended to be edited by hand. It is created and updated by Redis nodes.</span>
<span class="token comment"># Every Redis Cluster node requires a different cluster configuration file.</span>
<span class="token comment"># Make sure that instances running in the same system do not have</span>
<span class="token comment"># overlapping cluster configuration file names.</span>
<span class="token comment">#</span>
<span class="token comment"># cluster-config-file nodes-6379.conf</span>

<span class="token comment"># Cluster node timeout is the amount of milliseconds a node must be unreachable</span>
<span class="token comment"># for it to be considered in failure state.</span>
<span class="token comment"># Most other internal time limits are a multiple of the node timeout.</span>
<span class="token comment">#</span>
<span class="token comment"># cluster-node-timeout 15000</span>

<span class="token comment"># A replica of a failing master will avoid to start a failover if its data</span>
<span class="token comment"># looks too old.</span>
<span class="token comment">#</span>
<span class="token comment"># There is no simple way for a replica to actually have an exact measure of</span>
<span class="token comment"># its &quot;data age&quot;, so the following two checks are performed:</span>
<span class="token comment">#</span>
<span class="token comment"># 1) If there are multiple replicas able to failover, they exchange messages</span>
<span class="token comment">#    in order to try to give an advantage to the replica with the best</span>
<span class="token comment">#    replication offset (more data from the master processed).</span>
<span class="token comment">#    Replicas will try to get their rank by offset, and apply to the start</span>
<span class="token comment">#    of the failover a delay proportional to their rank.</span>
<span class="token comment">#</span>
<span class="token comment"># 2) Every single replica computes the time of the last interaction with</span>
<span class="token comment">#    its master. This can be the last ping or command received (if the master</span>
<span class="token comment">#    is still in the &quot;connected&quot; state), or the time that elapsed since the</span>
<span class="token comment">#    disconnection with the master (if the replication link is currently down).</span>
<span class="token comment">#    If the last interaction is too old, the replica will not try to failover</span>
<span class="token comment">#    at all.</span>
<span class="token comment">#</span>
<span class="token comment"># The point &quot;2&quot; can be tuned by user. Specifically a replica will not perform</span>
<span class="token comment"># the failover if, since the last interaction with the master, the time</span>
<span class="token comment"># elapsed is greater than:</span>
<span class="token comment">#</span>
<span class="token comment">#   (node-timeout * cluster-replica-validity-factor) + repl-ping-replica-period</span>
<span class="token comment">#</span>
<span class="token comment"># So for example if node-timeout is 30 seconds, and the cluster-replica-validity-factor</span>
<span class="token comment"># is 10, and assuming a default repl-ping-replica-period of 10 seconds, the</span>
<span class="token comment"># replica will not try to failover if it was not able to talk with the master</span>
<span class="token comment"># for longer than 310 seconds.</span>
<span class="token comment">#</span>
<span class="token comment"># A large cluster-replica-validity-factor may allow replicas with too old data to failover</span>
<span class="token comment"># a master, while a too small value may prevent the cluster from being able to</span>
<span class="token comment"># elect a replica at all.</span>
<span class="token comment">#</span>
<span class="token comment"># For maximum availability, it is possible to set the cluster-replica-validity-factor</span>
<span class="token comment"># to a value of 0, which means, that replicas will always try to failover the</span>
<span class="token comment"># master regardless of the last time they interacted with the master.</span>
<span class="token comment"># (However they&#39;ll always try to apply a delay proportional to their</span>
<span class="token comment"># offset rank).</span>
<span class="token comment">#</span>
<span class="token comment"># Zero is the only value able to guarantee that when all the partitions heal</span>
<span class="token comment"># the cluster will always be able to continue.</span>
<span class="token comment">#</span>
<span class="token comment"># cluster-replica-validity-factor 10</span>

<span class="token comment"># Cluster replicas are able to migrate to orphaned masters, that are masters</span>
<span class="token comment"># that are left without working replicas. This improves the cluster ability</span>
<span class="token comment"># to resist to failures as otherwise an orphaned master can&#39;t be failed over</span>
<span class="token comment"># in case of failure if it has no working replicas.</span>
<span class="token comment">#</span>
<span class="token comment"># Replicas migrate to orphaned masters only if there are still at least a</span>
<span class="token comment"># given number of other working replicas for their old master. This number</span>
<span class="token comment"># is the &quot;migration barrier&quot;. A migration barrier of 1 means that a replica</span>
<span class="token comment"># will migrate only if there is at least 1 other working replica for its master</span>
<span class="token comment"># and so forth. It usually reflects the number of replicas you want for every</span>
<span class="token comment"># master in your cluster.</span>
<span class="token comment">#</span>
<span class="token comment"># Default is 1 (replicas migrate only if their masters remain with at least</span>
<span class="token comment"># one replica). To disable migration just set it to a very large value.</span>
<span class="token comment"># A value of 0 can be set but is useful only for debugging and dangerous</span>
<span class="token comment"># in production.</span>
<span class="token comment">#</span>
<span class="token comment"># cluster-migration-barrier 1</span>

<span class="token comment"># By default Redis Cluster nodes stop accepting queries if they detect there</span>
<span class="token comment"># is at least a hash slot uncovered (no available node is serving it).</span>
<span class="token comment"># This way if the cluster is partially down (for example a range of hash slots</span>
<span class="token comment"># are no longer covered) all the cluster becomes, eventually, unavailable.</span>
<span class="token comment"># It automatically returns available as soon as all the slots are covered again.</span>
<span class="token comment">#</span>
<span class="token comment"># However sometimes you want the subset of the cluster which is working,</span>
<span class="token comment"># to continue to accept queries for the part of the key space that is still</span>
<span class="token comment"># covered. In order to do so, just set the cluster-require-full-coverage</span>
<span class="token comment"># option to no.</span>
<span class="token comment">#</span>
<span class="token comment"># cluster-require-full-coverage yes</span>

<span class="token comment"># This option, when set to yes, prevents replicas from trying to failover its</span>
<span class="token comment"># master during master failures. However the master can still perform a</span>
<span class="token comment"># manual failover, if forced to do so.</span>
<span class="token comment">#</span>
<span class="token comment"># This is useful in different scenarios, especially in the case of multiple</span>
<span class="token comment"># data center operations, where we want one side to never be promoted if not</span>
<span class="token comment"># in the case of a total DC failure.</span>
<span class="token comment">#</span>
<span class="token comment"># cluster-replica-no-failover no</span>

<span class="token comment"># This option, when set to yes, allows nodes to serve read traffic while the</span>
<span class="token comment"># the cluster is in a down state, as long as it believes it owns the slots. </span>
<span class="token comment">#</span>
<span class="token comment"># This is useful for two cases.  The first case is for when an application </span>
<span class="token comment"># doesn&#39;t require consistency of data during node failures or network partitions.</span>
<span class="token comment"># One example of this is a cache, where as long as the node has the data it</span>
<span class="token comment"># should be able to serve it. </span>
<span class="token comment">#</span>
<span class="token comment"># The second use case is for configurations that don&#39;t meet the recommended  </span>
<span class="token comment"># three shards but want to enable cluster mode and scale later. A </span>
<span class="token comment"># master outage in a 1 or 2 shard configuration causes a read/write outage to the</span>
<span class="token comment"># entire cluster without this option set, with it set there is only a write outage.</span>
<span class="token comment"># Without a quorum of masters, slot ownership will not change automatically. </span>
<span class="token comment">#</span>
<span class="token comment"># cluster-allow-reads-when-down no</span>

<span class="token comment"># In order to setup your cluster make sure to read the documentation</span>
<span class="token comment"># available at http://redis.io web site.</span>

<span class="token comment">########################## CLUSTER DOCKER/NAT support  ########################</span>

<span class="token comment"># In certain deployments, Redis Cluster nodes address discovery fails, because</span>
<span class="token comment"># addresses are NAT-ted or because ports are forwarded (the typical case is</span>
<span class="token comment"># Docker and other containers).</span>
<span class="token comment">#</span>
<span class="token comment"># In order to make Redis Cluster working in such environments, a static</span>
<span class="token comment"># configuration where each node knows its public address is needed. The</span>
<span class="token comment"># following two options are used for this scope, and are:</span>
<span class="token comment">#</span>
<span class="token comment"># * cluster-announce-ip</span>
<span class="token comment"># * cluster-announce-port</span>
<span class="token comment"># * cluster-announce-bus-port</span>
<span class="token comment">#</span>
<span class="token comment"># Each instructs the node about its address, client port, and cluster message</span>
<span class="token comment"># bus port. The information is then published in the header of the bus packets</span>
<span class="token comment"># so that other nodes will be able to correctly map the address of the node</span>
<span class="token comment"># publishing the information.</span>
<span class="token comment">#</span>
<span class="token comment"># If the above options are not used, the normal Redis Cluster auto-detection</span>
<span class="token comment"># will be used instead.</span>
<span class="token comment">#</span>
<span class="token comment"># Note that when remapped, the bus port may not be at the fixed offset of</span>
<span class="token comment"># clients port + 10000, so you can specify any port and bus-port depending</span>
<span class="token comment"># on how they get remapped. If the bus-port is not set, a fixed offset of</span>
<span class="token comment"># 10000 will be used as usual.</span>
<span class="token comment">#</span>
<span class="token comment"># Example:</span>
<span class="token comment">#</span>
<span class="token comment"># cluster-announce-ip 10.1.1.5</span>
<span class="token comment"># cluster-announce-port 6379</span>
<span class="token comment"># cluster-announce-bus-port 6380</span>

<span class="token comment">################################## SLOW LOG ###################################</span>

<span class="token comment"># The Redis Slow Log is a system to log queries that exceeded a specified</span>
<span class="token comment"># execution time. The execution time does not include the I/O operations</span>
<span class="token comment"># like talking with the client, sending the reply and so forth,</span>
<span class="token comment"># but just the time needed to actually execute the command (this is the only</span>
<span class="token comment"># stage of command execution where the thread is blocked and can not serve</span>
<span class="token comment"># other requests in the meantime).</span>
<span class="token comment">#</span>
<span class="token comment"># You can configure the slow log with two parameters: one tells Redis</span>
<span class="token comment"># what is the execution time, in microseconds, to exceed in order for the</span>
<span class="token comment"># command to get logged, and the other parameter is the length of the</span>
<span class="token comment"># slow log. When a new command is logged the oldest one is removed from the</span>
<span class="token comment"># queue of logged commands.</span>

<span class="token comment"># The following time is expressed in microseconds, so 1000000 is equivalent</span>
<span class="token comment"># to one second. Note that a negative number disables the slow log, while</span>
<span class="token comment"># a value of zero forces the logging of every command.</span>
<span class="token key attr-name">slowlog-log-slower-than</span> <span class="token value attr-value">10000</span>

<span class="token comment"># There is no limit to this length. Just be aware that it will consume memory.</span>
<span class="token comment"># You can reclaim memory used by the slow log with SLOWLOG RESET.</span>
<span class="token key attr-name">slowlog-max-len</span> <span class="token value attr-value">128</span>

<span class="token comment">################################ LATENCY MONITOR ##############################</span>

<span class="token comment"># The Redis latency monitoring subsystem samples different operations</span>
<span class="token comment"># at runtime in order to collect data related to possible sources of</span>
<span class="token comment"># latency of a Redis instance.</span>
<span class="token comment">#</span>
<span class="token comment"># Via the LATENCY command this information is available to the user that can</span>
<span class="token comment"># print graphs and obtain reports.</span>
<span class="token comment">#</span>
<span class="token comment"># The system only logs operations that were performed in a time equal or</span>
<span class="token comment"># greater than the amount of milliseconds specified via the</span>
<span class="token comment"># latency-monitor-threshold configuration directive. When its value is set</span>
<span class="token comment"># to zero, the latency monitor is turned off.</span>
<span class="token comment">#</span>
<span class="token comment"># By default latency monitoring is disabled since it is mostly not needed</span>
<span class="token comment"># if you don&#39;t have latency issues, and collecting data has a performance</span>
<span class="token comment"># impact, that while very small, can be measured under big load. Latency</span>
<span class="token comment"># monitoring can easily be enabled at runtime using the command</span>
<span class="token comment"># &quot;CONFIG SET latency-monitor-threshold &lt;milliseconds&gt;&quot; if needed.</span>
<span class="token key attr-name">latency-monitor-threshold</span> <span class="token value attr-value">0</span>

<span class="token comment">############################# EVENT NOTIFICATION ##############################</span>

<span class="token comment"># Redis can notify Pub/Sub clients about events happening in the key space.</span>
<span class="token comment"># This feature is documented at http://redis.io/topics/notifications</span>
<span class="token comment">#</span>
<span class="token comment"># For instance if keyspace events notification is enabled, and a client</span>
<span class="token comment"># performs a DEL operation on key &quot;foo&quot; stored in the Database 0, two</span>
<span class="token comment"># messages will be published via Pub/Sub:</span>
<span class="token comment">#</span>
<span class="token comment"># PUBLISH __keyspace@0__:foo del</span>
<span class="token comment"># PUBLISH __keyevent@0__:del foo</span>
<span class="token comment">#</span>
<span class="token comment"># It is possible to select the events that Redis will notify among a set</span>
<span class="token comment"># of classes. Every class is identified by a single character:</span>
<span class="token comment">#</span>
<span class="token comment">#  K     Keyspace events, published with __keyspace@&lt;db&gt;__ prefix.</span>
<span class="token comment">#  E     Keyevent events, published with __keyevent@&lt;db&gt;__ prefix.</span>
<span class="token comment">#  g     Generic commands (non-type specific) like DEL, EXPIRE, RENAME, ...</span>
<span class="token comment">#  $     String commands</span>
<span class="token comment">#  l     List commands</span>
<span class="token comment">#  s     Set commands</span>
<span class="token comment">#  h     Hash commands</span>
<span class="token comment">#  z     Sorted set commands</span>
<span class="token comment">#  x     Expired events (events generated every time a key expires)</span>
<span class="token comment">#  e     Evicted events (events generated when a key is evicted for maxmemory)</span>
<span class="token comment">#  t     Stream commands</span>
<span class="token comment">#  m     Key-miss events (Note: It is not included in the &#39;A&#39; class)</span>
<span class="token comment">#  A     Alias for g$lshzxet, so that the &quot;AKE&quot; string means all the events</span>
<span class="token comment">#        (Except key-miss events which are excluded from &#39;A&#39; due to their</span>
<span class="token comment">#         unique nature).</span>
<span class="token comment">#</span>
<span class="token comment">#  The &quot;notify-keyspace-events&quot; takes as argument a string that is composed</span>
<span class="token comment">#  of zero or multiple characters. The empty string means that notifications</span>
<span class="token comment">#  are disabled.</span>
<span class="token comment">#</span>
<span class="token comment">#  Example: to enable list and generic events, from the point of view of the</span>
<span class="token comment">#           event name, use:</span>
<span class="token comment">#</span>
<span class="token comment">#  notify-keyspace-events Elg</span>
<span class="token comment">#</span>
<span class="token comment">#  Example 2: to get the stream of the expired keys subscribing to channel</span>
<span class="token comment">#             name __keyevent@0__:expired use:</span>
<span class="token comment">#</span>
<span class="token comment">#  notify-keyspace-events Ex</span>
<span class="token comment">#</span>
<span class="token comment">#  By default all notifications are disabled because most users don&#39;t need</span>
<span class="token comment">#  this feature and the feature has some overhead. Note that if you don&#39;t</span>
<span class="token comment">#  specify at least one of K or E, no events will be delivered.</span>
<span class="token key attr-name">notify-keyspace-events</span> <span class="token value attr-value">&quot;&quot;</span>

<span class="token comment">############################### GOPHER SERVER #################################</span>

<span class="token comment"># Redis contains an implementation of the Gopher protocol, as specified in</span>
<span class="token comment"># the RFC 1436 (https://www.ietf.org/rfc/rfc1436.txt).</span>
<span class="token comment">#</span>
<span class="token comment"># The Gopher protocol was very popular in the late &#39;90s. It is an alternative</span>
<span class="token comment"># to the web, and the implementation both server and client side is so simple</span>
<span class="token comment"># that the Redis server has just 100 lines of code in order to implement this</span>
<span class="token comment"># support.</span>
<span class="token comment">#</span>
<span class="token comment"># What do you do with Gopher nowadays? Well Gopher never *really* died, and</span>
<span class="token comment"># lately there is a movement in order for the Gopher more hierarchical content</span>
<span class="token comment"># composed of just plain text documents to be resurrected. Some want a simpler</span>
<span class="token comment"># internet, others believe that the mainstream internet became too much</span>
<span class="token comment"># controlled, and it&#39;s cool to create an alternative space for people that</span>
<span class="token comment"># want a bit of fresh air.</span>
<span class="token comment">#</span>
<span class="token comment"># Anyway for the 10nth birthday of the Redis, we gave it the Gopher protocol</span>
<span class="token comment"># as a gift.</span>
<span class="token comment">#</span>
<span class="token comment"># --- HOW IT WORKS? ---</span>
<span class="token comment">#</span>
<span class="token comment"># The Redis Gopher support uses the inline protocol of Redis, and specifically</span>
<span class="token comment"># two kind of inline requests that were anyway illegal: an empty request</span>
<span class="token comment"># or any request that starts with &quot;/&quot; (there are no Redis commands starting</span>
<span class="token comment"># with such a slash). Normal RESP2/RESP3 requests are completely out of the</span>
<span class="token comment"># path of the Gopher protocol implementation and are served as usual as well.</span>
<span class="token comment">#</span>
<span class="token comment"># If you open a connection to Redis when Gopher is enabled and send it</span>
<span class="token comment"># a string like &quot;/foo&quot;, if there is a key named &quot;/foo&quot; it is served via the</span>
<span class="token comment"># Gopher protocol.</span>
<span class="token comment">#</span>
<span class="token comment"># In order to create a real Gopher &quot;hole&quot; (the name of a Gopher site in Gopher</span>
<span class="token comment"># talking), you likely need a script like the following:</span>
<span class="token comment">#</span>
<span class="token comment">#   https://github.com/antirez/gopher2redis</span>
<span class="token comment">#</span>
<span class="token comment"># --- SECURITY WARNING ---</span>
<span class="token comment">#</span>
<span class="token comment"># If you plan to put Redis on the internet in a publicly accessible address</span>
<span class="token comment"># to server Gopher pages MAKE SURE TO SET A PASSWORD to the instance.</span>
<span class="token comment"># Once a password is set:</span>
<span class="token comment">#</span>
<span class="token comment">#   1. The Gopher server (when enabled, not by default) will still serve</span>
<span class="token comment">#      content via Gopher.</span>
<span class="token comment">#   2. However other commands cannot be called before the client will</span>
<span class="token comment">#      authenticate.</span>
<span class="token comment">#</span>
<span class="token comment"># So use the &#39;requirepass&#39; option to protect your instance.</span>
<span class="token comment">#</span>
<span class="token comment"># Note that Gopher is not currently supported when &#39;io-threads-do-reads&#39;</span>
<span class="token comment"># is enabled.</span>
<span class="token comment">#</span>
<span class="token comment"># To enable Gopher support, uncomment the following line and set the option</span>
<span class="token comment"># from no (the default) to yes.</span>
<span class="token comment">#</span>
<span class="token comment"># gopher-enabled no</span>

<span class="token comment">############################### ADVANCED CONFIG ###############################</span>

<span class="token comment"># Hashes are encoded using a memory efficient data structure when they have a</span>
<span class="token comment"># small number of entries, and the biggest entry does not exceed a given</span>
<span class="token comment"># threshold. These thresholds can be configured using the following directives.</span>
<span class="token key attr-name">hash-max-ziplist-entries</span> <span class="token value attr-value">512</span>
<span class="token key attr-name">hash-max-ziplist-value</span> <span class="token value attr-value">64</span>

<span class="token comment"># Lists are also encoded in a special way to save a lot of space.</span>
<span class="token comment"># The number of entries allowed per internal list node can be specified</span>
<span class="token comment"># as a fixed maximum size or a maximum number of elements.</span>
<span class="token comment"># For a fixed maximum size, use -5 through -1, meaning:</span>
<span class="token comment"># -5: max size: 64 Kb  &lt;-- not recommended for normal workloads</span>
<span class="token comment"># -4: max size: 32 Kb  &lt;-- not recommended</span>
<span class="token comment"># -3: max size: 16 Kb  &lt;-- probably not recommended</span>
<span class="token comment"># -2: max size: 8 Kb   &lt;-- good</span>
<span class="token comment"># -1: max size: 4 Kb   &lt;-- good</span>
<span class="token comment"># Positive numbers mean store up to _exactly_ that number of elements</span>
<span class="token comment"># per list node.</span>
<span class="token comment"># The highest performing option is usually -2 (8 Kb size) or -1 (4 Kb size),</span>
<span class="token comment"># but if your use case is unique, adjust the settings as necessary.</span>
<span class="token key attr-name">list-max-ziplist-size</span> <span class="token value attr-value">-2</span>

<span class="token comment"># Lists may also be compressed.</span>
<span class="token comment"># Compress depth is the number of quicklist ziplist nodes from *each* side of</span>
<span class="token comment"># the list to *exclude* from compression.  The head and tail of the list</span>
<span class="token comment"># are always uncompressed for fast push/pop operations.  Settings are:</span>
<span class="token comment"># 0: disable all list compression</span>
<span class="token comment"># 1: depth 1 means &quot;don&#39;t start compressing until after 1 node into the list,</span>
<span class="token comment">#    going from either the head or tail&quot;</span>
<span class="token comment">#    So: [head]-&gt;node-&gt;node-&gt;...-&gt;node-&gt;[tail]</span>
<span class="token comment">#    [head], [tail] will always be uncompressed; inner nodes will compress.</span>
<span class="token comment"># 2: [head]-&gt;[next]-&gt;node-&gt;node-&gt;...-&gt;node-&gt;[prev]-&gt;[tail]</span>
<span class="token comment">#    2 here means: don&#39;t compress head or head-&gt;next or tail-&gt;prev or tail,</span>
<span class="token comment">#    but compress all nodes between them.</span>
<span class="token comment"># 3: [head]-&gt;[next]-&gt;[next]-&gt;node-&gt;node-&gt;...-&gt;node-&gt;[prev]-&gt;[prev]-&gt;[tail]</span>
<span class="token comment"># etc.</span>
<span class="token key attr-name">list-compress-depth</span> <span class="token value attr-value">0</span>

<span class="token comment"># Sets have a special encoding in just one case: when a set is composed</span>
<span class="token comment"># of just strings that happen to be integers in radix 10 in the range</span>
<span class="token comment"># of 64 bit signed integers.</span>
<span class="token comment"># The following configuration setting sets the limit in the size of the</span>
<span class="token comment"># set in order to use this special memory saving encoding.</span>
<span class="token key attr-name">set-max-intset-entries</span> <span class="token value attr-value">512</span>

<span class="token comment"># Similarly to hashes and lists, sorted sets are also specially encoded in</span>
<span class="token comment"># order to save a lot of space. This encoding is only used when the length and</span>
<span class="token comment"># elements of a sorted set are below the following limits:</span>
<span class="token key attr-name">zset-max-ziplist-entries</span> <span class="token value attr-value">128</span>
<span class="token key attr-name">zset-max-ziplist-value</span> <span class="token value attr-value">64</span>

<span class="token comment"># HyperLogLog sparse representation bytes limit. The limit includes the</span>
<span class="token comment"># 16 bytes header. When an HyperLogLog using the sparse representation crosses</span>
<span class="token comment"># this limit, it is converted into the dense representation.</span>
<span class="token comment">#</span>
<span class="token comment"># A value greater than 16000 is totally useless, since at that point the</span>
<span class="token comment"># dense representation is more memory efficient.</span>
<span class="token comment">#</span>
<span class="token comment"># The suggested value is ~ 3000 in order to have the benefits of</span>
<span class="token comment"># the space efficient encoding without slowing down too much PFADD,</span>
<span class="token comment"># which is O(N) with the sparse encoding. The value can be raised to</span>
<span class="token comment"># ~ 10000 when CPU is not a concern, but space is, and the data set is</span>
<span class="token comment"># composed of many HyperLogLogs with cardinality in the 0 - 15000 range.</span>
<span class="token key attr-name">hll-sparse-max-bytes</span> <span class="token value attr-value">3000</span>

<span class="token comment"># Streams macro node max size / items. The stream data structure is a radix</span>
<span class="token comment"># tree of big nodes that encode multiple items inside. Using this configuration</span>
<span class="token comment"># it is possible to configure how big a single node can be in bytes, and the</span>
<span class="token comment"># maximum number of items it may contain before switching to a new node when</span>
<span class="token comment"># appending new stream entries. If any of the following settings are set to</span>
<span class="token comment"># zero, the limit is ignored, so for instance it is possible to set just a</span>
<span class="token comment"># max entires limit by setting max-bytes to 0 and max-entries to the desired</span>
<span class="token comment"># value.</span>
<span class="token key attr-name">stream-node-max-bytes</span> <span class="token value attr-value">4096</span>
<span class="token key attr-name">stream-node-max-entries</span> <span class="token value attr-value">100</span>

<span class="token comment"># Active rehashing uses 1 millisecond every 100 milliseconds of CPU time in</span>
<span class="token comment"># order to help rehashing the main Redis hash table (the one mapping top-level</span>
<span class="token comment"># keys to values). The hash table implementation Redis uses (see dict.c)</span>
<span class="token comment"># performs a lazy rehashing: the more operation you run into a hash table</span>
<span class="token comment"># that is rehashing, the more rehashing &quot;steps&quot; are performed, so if the</span>
<span class="token comment"># server is idle the rehashing is never complete and some more memory is used</span>
<span class="token comment"># by the hash table.</span>
<span class="token comment">#</span>
<span class="token comment"># The default is to use this millisecond 10 times every second in order to</span>
<span class="token comment"># actively rehash the main dictionaries, freeing memory when possible.</span>
<span class="token comment">#</span>
<span class="token comment"># If unsure:</span>
<span class="token comment"># use &quot;activerehashing no&quot; if you have hard latency requirements and it is</span>
<span class="token comment"># not a good thing in your environment that Redis can reply from time to time</span>
<span class="token comment"># to queries with 2 milliseconds delay.</span>
<span class="token comment">#</span>
<span class="token comment"># use &quot;activerehashing yes&quot; if you don&#39;t have such hard requirements but</span>
<span class="token comment"># want to free memory asap when possible.</span>
<span class="token key attr-name">activerehashing</span> <span class="token value attr-value">yes</span>

<span class="token comment"># The client output buffer limits can be used to force disconnection of clients</span>
<span class="token comment"># that are not reading data from the server fast enough for some reason (a</span>
<span class="token comment"># common reason is that a Pub/Sub client can&#39;t consume messages as fast as the</span>
<span class="token comment"># publisher can produce them).</span>
<span class="token comment">#</span>
<span class="token comment"># The limit can be set differently for the three different classes of clients:</span>
<span class="token comment">#</span>
<span class="token comment"># normal -&gt; normal clients including MONITOR clients</span>
<span class="token comment"># replica  -&gt; replica clients</span>
<span class="token comment"># pubsub -&gt; clients subscribed to at least one pubsub channel or pattern</span>
<span class="token comment">#</span>
<span class="token comment"># The syntax of every client-output-buffer-limit directive is the following:</span>
<span class="token comment">#</span>
<span class="token comment"># client-output-buffer-limit &lt;class&gt; &lt;hard limit&gt; &lt;soft limit&gt; &lt;soft seconds&gt;</span>
<span class="token comment">#</span>
<span class="token comment"># A client is immediately disconnected once the hard limit is reached, or if</span>
<span class="token comment"># the soft limit is reached and remains reached for the specified number of</span>
<span class="token comment"># seconds (continuously).</span>
<span class="token comment"># So for instance if the hard limit is 32 megabytes and the soft limit is</span>
<span class="token comment"># 16 megabytes / 10 seconds, the client will get disconnected immediately</span>
<span class="token comment"># if the size of the output buffers reach 32 megabytes, but will also get</span>
<span class="token comment"># disconnected if the client reaches 16 megabytes and continuously overcomes</span>
<span class="token comment"># the limit for 10 seconds.</span>
<span class="token comment">#</span>
<span class="token comment"># By default normal clients are not limited because they don&#39;t receive data</span>
<span class="token comment"># without asking (in a push way), but just after a request, so only</span>
<span class="token comment"># asynchronous clients may create a scenario where data is requested faster</span>
<span class="token comment"># than it can read.</span>
<span class="token comment">#</span>
<span class="token comment"># Instead there is a default limit for pubsub and replica clients, since</span>
<span class="token comment"># subscribers and replicas receive data in a push fashion.</span>
<span class="token comment">#</span>
<span class="token comment"># Both the hard or the soft limit can be disabled by setting them to zero.</span>
<span class="token key attr-name">client-output-buffer-limit</span> <span class="token value attr-value">normal 0 0 0</span>
<span class="token key attr-name">client-output-buffer-limit</span> <span class="token value attr-value">replica 256mb 64mb 60</span>
<span class="token key attr-name">client-output-buffer-limit</span> <span class="token value attr-value">pubsub 32mb 8mb 60</span>

<span class="token comment"># Client query buffers accumulate new commands. They are limited to a fixed</span>
<span class="token comment"># amount by default in order to avoid that a protocol desynchronization (for</span>
<span class="token comment"># instance due to a bug in the client) will lead to unbound memory usage in</span>
<span class="token comment"># the query buffer. However you can configure it here if you have very special</span>
<span class="token comment"># needs, such us huge multi/exec requests or alike.</span>
<span class="token comment">#</span>
<span class="token comment"># client-query-buffer-limit 1gb</span>

<span class="token comment"># In the Redis protocol, bulk requests, that are, elements representing single</span>
<span class="token comment"># strings, are normally limited to 512 mb. However you can change this limit</span>
<span class="token comment"># here, but must be 1mb or greater</span>
<span class="token comment">#</span>
<span class="token comment"># proto-max-bulk-len 512mb</span>

<span class="token comment"># Redis calls an internal function to perform many background tasks, like</span>
<span class="token comment"># closing connections of clients in timeout, purging expired keys that are</span>
<span class="token comment"># never requested, and so forth.</span>
<span class="token comment">#</span>
<span class="token comment"># Not all tasks are performed with the same frequency, but Redis checks for</span>
<span class="token comment"># tasks to perform according to the specified &quot;hz&quot; value.</span>
<span class="token comment">#</span>
<span class="token comment"># By default &quot;hz&quot; is set to 10. Raising the value will use more CPU when</span>
<span class="token comment"># Redis is idle, but at the same time will make Redis more responsive when</span>
<span class="token comment"># there are many keys expiring at the same time, and timeouts may be</span>
<span class="token comment"># handled with more precision.</span>
<span class="token comment">#</span>
<span class="token comment"># The range is between 1 and 500, however a value over 100 is usually not</span>
<span class="token comment"># a good idea. Most users should use the default of 10 and raise this up to</span>
<span class="token comment"># 100 only in environments where very low latency is required.</span>
<span class="token key attr-name">hz</span> <span class="token value attr-value">10</span>

<span class="token comment"># Normally it is useful to have an HZ value which is proportional to the</span>
<span class="token comment"># number of clients connected. This is useful in order, for instance, to</span>
<span class="token comment"># avoid too many clients are processed for each background task invocation</span>
<span class="token comment"># in order to avoid latency spikes.</span>
<span class="token comment">#</span>
<span class="token comment"># Since the default HZ value by default is conservatively set to 10, Redis</span>
<span class="token comment"># offers, and enables by default, the ability to use an adaptive HZ value</span>
<span class="token comment"># which will temporarily raise when there are many connected clients.</span>
<span class="token comment">#</span>
<span class="token comment"># When dynamic HZ is enabled, the actual configured HZ will be used</span>
<span class="token comment"># as a baseline, but multiples of the configured HZ value will be actually</span>
<span class="token comment"># used as needed once more clients are connected. In this way an idle</span>
<span class="token comment"># instance will use very little CPU time while a busy instance will be</span>
<span class="token comment"># more responsive.</span>
<span class="token key attr-name">dynamic-hz</span> <span class="token value attr-value">yes</span>

<span class="token comment"># When a child rewrites the AOF file, if the following option is enabled</span>
<span class="token comment"># the file will be fsync-ed every 32 MB of data generated. This is useful</span>
<span class="token comment"># in order to commit the file to the disk more incrementally and avoid</span>
<span class="token comment"># big latency spikes.</span>
<span class="token key attr-name">aof-rewrite-incremental-fsync</span> <span class="token value attr-value">yes</span>

<span class="token comment"># When redis saves RDB file, if the following option is enabled</span>
<span class="token comment"># the file will be fsync-ed every 32 MB of data generated. This is useful</span>
<span class="token comment"># in order to commit the file to the disk more incrementally and avoid</span>
<span class="token comment"># big latency spikes.</span>
<span class="token key attr-name">rdb-save-incremental-fsync</span> <span class="token value attr-value">yes</span>

<span class="token comment"># Redis LFU eviction (see maxmemory setting) can be tuned. However it is a good</span>
<span class="token comment"># idea to start with the default settings and only change them after investigating</span>
<span class="token comment"># how to improve the performances and how the keys LFU change over time, which</span>
<span class="token comment"># is possible to inspect via the OBJECT FREQ command.</span>
<span class="token comment">#</span>
<span class="token comment"># There are two tunable parameters in the Redis LFU implementation: the</span>
<span class="token comment"># counter logarithm factor and the counter decay time. It is important to</span>
<span class="token comment"># understand what the two parameters mean before changing them.</span>
<span class="token comment">#</span>
<span class="token comment"># The LFU counter is just 8 bits per key, it&#39;s maximum value is 255, so Redis</span>
<span class="token comment"># uses a probabilistic increment with logarithmic behavior. Given the value</span>
<span class="token comment"># of the old counter, when a key is accessed, the counter is incremented in</span>
<span class="token comment"># this way:</span>
<span class="token comment">#</span>
<span class="token comment"># 1. A random number R between 0 and 1 is extracted.</span>
<span class="token comment"># 2. A probability P is calculated as 1/(old_value*lfu_log_factor+1).</span>
<span class="token comment"># 3. The counter is incremented only if R &lt; P.</span>
<span class="token comment">#</span>
<span class="token comment"># The default lfu-log-factor is 10. This is a table of how the frequency</span>
<span class="token comment"># counter changes with a different number of accesses with different</span>
<span class="token comment"># logarithmic factors:</span>
<span class="token comment">#</span>
<span class="token comment"># +--------+------------+------------+------------+------------+------------+</span>
<span class="token comment"># | factor | 100 hits   | 1000 hits  | 100K hits  | 1M hits    | 10M hits   |</span>
<span class="token comment"># +--------+------------+------------+------------+------------+------------+</span>
<span class="token comment"># | 0      | 104        | 255        | 255        | 255        | 255        |</span>
<span class="token comment"># +--------+------------+------------+------------+------------+------------+</span>
<span class="token comment"># | 1      | 18         | 49         | 255        | 255        | 255        |</span>
<span class="token comment"># +--------+------------+------------+------------+------------+------------+</span>
<span class="token comment"># | 10     | 10         | 18         | 142        | 255        | 255        |</span>
<span class="token comment"># +--------+------------+------------+------------+------------+------------+</span>
<span class="token comment"># | 100    | 8          | 11         | 49         | 143        | 255        |</span>
<span class="token comment"># +--------+------------+------------+------------+------------+------------+</span>
<span class="token comment">#</span>
<span class="token comment"># NOTE: The above table was obtained by running the following commands:</span>
<span class="token comment">#</span>
<span class="token comment">#   redis-benchmark -n 1000000 incr foo</span>
<span class="token comment">#   redis-cli object freq foo</span>
<span class="token comment">#</span>
<span class="token comment"># NOTE 2: The counter initial value is 5 in order to give new objects a chance</span>
<span class="token comment"># to accumulate hits.</span>
<span class="token comment">#</span>
<span class="token comment"># The counter decay time is the time, in minutes, that must elapse in order</span>
<span class="token comment"># for the key counter to be divided by two (or decremented if it has a value</span>
<span class="token comment"># less &lt;= 10).</span>
<span class="token comment">#</span>
<span class="token comment"># The default value for the lfu-decay-time is 1. A special value of 0 means to</span>
<span class="token comment"># decay the counter every time it happens to be scanned.</span>
<span class="token comment">#</span>
<span class="token comment"># lfu-log-factor 10</span>
<span class="token comment"># lfu-decay-time 1</span>

<span class="token comment">########################### ACTIVE DEFRAGMENTATION #######################</span>
<span class="token comment">#</span>
<span class="token comment"># What is active defragmentation?</span>
<span class="token comment"># -------------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Active (online) defragmentation allows a Redis server to compact the</span>
<span class="token comment"># spaces left between small allocations and deallocations of data in memory,</span>
<span class="token comment"># thus allowing to reclaim back memory.</span>
<span class="token comment">#</span>
<span class="token comment"># Fragmentation is a natural process that happens with every allocator (but</span>
<span class="token comment"># less so with Jemalloc, fortunately) and certain workloads. Normally a server</span>
<span class="token comment"># restart is needed in order to lower the fragmentation, or at least to flush</span>
<span class="token comment"># away all the data and create it again. However thanks to this feature</span>
<span class="token comment"># implemented by Oran Agra for Redis 4.0 this process can happen at runtime</span>
<span class="token comment"># in a &quot;hot&quot; way, while the server is running.</span>
<span class="token comment">#</span>
<span class="token comment"># Basically when the fragmentation is over a certain level (see the</span>
<span class="token comment"># configuration options below) Redis will start to create new copies of the</span>
<span class="token comment"># values in contiguous memory regions by exploiting certain specific Jemalloc</span>
<span class="token comment"># features (in order to understand if an allocation is causing fragmentation</span>
<span class="token comment"># and to allocate it in a better place), and at the same time, will release the</span>
<span class="token comment"># old copies of the data. This process, repeated incrementally for all the keys</span>
<span class="token comment"># will cause the fragmentation to drop back to normal values.</span>
<span class="token comment">#</span>
<span class="token comment"># Important things to understand:</span>
<span class="token comment">#</span>
<span class="token comment"># 1. This feature is disabled by default, and only works if you compiled Redis</span>
<span class="token comment">#    to use the copy of Jemalloc we ship with the source code of Redis.</span>
<span class="token comment">#    This is the default with Linux builds.</span>
<span class="token comment">#</span>
<span class="token comment"># 2. You never need to enable this feature if you don&#39;t have fragmentation</span>
<span class="token comment">#    issues.</span>
<span class="token comment">#</span>
<span class="token comment"># 3. Once you experience fragmentation, you can enable this feature when</span>
<span class="token comment">#    needed with the command &quot;CONFIG SET activedefrag yes&quot;.</span>
<span class="token comment">#</span>
<span class="token comment"># The configuration parameters are able to fine tune the behavior of the</span>
<span class="token comment"># defragmentation process. If you are not sure about what they mean it is</span>
<span class="token comment"># a good idea to leave the defaults untouched.</span>

<span class="token comment"># Enabled active defragmentation</span>
<span class="token comment"># activedefrag no</span>

<span class="token comment"># Minimum amount of fragmentation waste to start active defrag</span>
<span class="token comment"># active-defrag-ignore-bytes 100mb</span>

<span class="token comment"># Minimum percentage of fragmentation to start active defrag</span>
<span class="token comment"># active-defrag-threshold-lower 10</span>

<span class="token comment"># Maximum percentage of fragmentation at which we use maximum effort</span>
<span class="token comment"># active-defrag-threshold-upper 100</span>

<span class="token comment"># Minimal effort for defrag in CPU percentage, to be used when the lower</span>
<span class="token comment"># threshold is reached</span>
<span class="token comment"># active-defrag-cycle-min 1</span>

<span class="token comment"># Maximal effort for defrag in CPU percentage, to be used when the upper</span>
<span class="token comment"># threshold is reached</span>
<span class="token comment"># active-defrag-cycle-max 25</span>

<span class="token comment"># Maximum number of set/hash/zset/list fields that will be processed from</span>
<span class="token comment"># the main dictionary scan</span>
<span class="token comment"># active-defrag-max-scan-fields 1000</span>

<span class="token comment"># Jemalloc background thread for purging will be enabled by default</span>
<span class="token key attr-name">jemalloc-bg-thread</span> <span class="token value attr-value">yes</span>

<span class="token comment"># It is possible to pin different threads and processes of Redis to specific</span>
<span class="token comment"># CPUs in your system, in order to maximize the performances of the server.</span>
<span class="token comment"># This is useful both in order to pin different Redis threads in different</span>
<span class="token comment"># CPUs, but also in order to make sure that multiple Redis instances running</span>
<span class="token comment"># in the same host will be pinned to different CPUs.</span>
<span class="token comment">#</span>
<span class="token comment"># Normally you can do this using the &quot;taskset&quot; command, however it is also</span>
<span class="token comment"># possible to this via Redis configuration directly, both in Linux and FreeBSD.</span>
<span class="token comment">#</span>
<span class="token comment"># You can pin the server/IO threads, bio threads, aof rewrite child process, and</span>
<span class="token comment"># the bgsave child process. The syntax to specify the cpu list is the same as</span>
<span class="token comment"># the taskset command:</span>
<span class="token comment">#</span>
<span class="token comment"># Set redis server/io threads to cpu affinity 0,2,4,6:</span>
<span class="token comment"># server_cpulist 0-7:2</span>
<span class="token comment">#</span>
<span class="token comment"># Set bio threads to cpu affinity 1,3:</span>
<span class="token comment"># bio_cpulist 1,3</span>
<span class="token comment">#</span>
<span class="token comment"># Set aof rewrite child process to cpu affinity 8,9,10,11:</span>
<span class="token comment"># aof_rewrite_cpulist 8-11</span>
<span class="token comment">#</span>
<span class="token comment"># Set bgsave child process to cpu affinity 1,10,11</span>
<span class="token comment"># bgsave_cpulist 1,10-11</span>

<span class="token comment"># In some cases redis will emit warnings and even refuse to start if it detects</span>
<span class="token comment"># that the system is in bad state, it is possible to suppress these warnings</span>
<span class="token comment"># by setting the following config which takes a space delimited list of warnings</span>
<span class="token comment"># to suppress</span>
<span class="token comment">#</span>
<span class="token comment"># ignore-warnings ARM64-COW-BUG</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r={href:"https://redis.io/docs/manual/config/",target:"_blank",rel:"noopener noreferrer"},p=s(`<p>将<code>redis.conf</code>放到<code>/myredis/conf</code>目录，启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-v</span> /myredis/conf:/usr/local/etc/redis <span class="token parameter variable">--name</span> myredis redis redis-server /usr/local/etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function v(u,b){const a=t("ExternalLinkIcon");return l(),o("div",null,[d,n("p",null,[e("其他版本的参考："),n("a",r,[e("redis conf"),c(a)])]),p])}const f=i(m,[["render",v],["__file","0.Redis简介及安装.html.vue"]]);export{f as default};
